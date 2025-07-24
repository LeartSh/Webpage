const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('./models/User');
const blockchainService = require('./services/blockchain');
const faceVerificationService = require('./services/faceVerification');

const app = express();
const upload = multer();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Authentication middleware
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });
        
        if (!user) {
            throw new Error();
        }
        
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Please authenticate' });
    }
};

// Routes
app.post('/api/register', upload.single('image'), async (req, res) => {
    try {
        const { name, idNumber, password } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ idNumber });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        
        // Verify face and get descriptor
        if (!req.file) {
            return res.status(400).json({ error: 'No image provided' });
        }
        
        const faceResult = await faceVerificationService.detectFace(req.file.buffer);
        if (!faceResult) {
            return res.status(400).json({ error: 'No face detected in the image' });
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create new user
        const user = new User({
            name,
            idNumber,
            password: hashedPassword,
            faceDescriptor: faceResult.descriptor
        });
        
        await user.save();
        
        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { idNumber, password } = req.body;
        
        // Find user
        const user = await User.findOne({ idNumber });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        
        res.json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/api/verify-face', auth, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image provided' });
        }
        
        // Verify face
        const verificationResult = await faceVerificationService.verifyFace(
            req.file.buffer,
            req.user.faceDescriptor
        );
        
        if (!verificationResult.success) {
            return res.status(400).json({ error: verificationResult.error });
        }
        
        if (!verificationResult.isMatch) {
            return res.status(401).json({ error: 'Face verification failed' });
        }
        
        // Record verification on blockchain
        const blockchainResult = await blockchainService.recordVerification(
            req.user.name,
            req.user.idNumber,
            true
        );
        
        if (!blockchainResult.success) {
            return res.status(500).json({ error: blockchainResult.error });
        }
        
        // Update user's verification history
        req.user.verificationHistory.push({
            timestamp: new Date(),
            isVerified: true,
            transactionHash: blockchainResult.transactionHash
        });
        
        await req.user.save();
        
        res.json({
            success: true,
            transactionHash: blockchainResult.transactionHash
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/verification-history', auth, async (req, res) => {
    try {
        res.json(req.user.verificationHistory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 