// API endpoints
const API_URL = 'http://localhost:3000/api';

// DOM elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const cameraSection = document.getElementById('camera-section');
const verificationSection = document.getElementById('verification-section');
const video = document.getElementById('video');
const captureBtn = document.getElementById('capture-btn');
const canvas = document.getElementById('canvas');
const verifyBtn = document.getElementById('verify-btn');
const resultDiv = document.getElementById('result');
const blockchainStatus = document.getElementById('blockchain-status');
const messageDiv = document.getElementById('message');
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');

let capturedImage = null;
let token = localStorage.getItem('token');

// Show/hide forms
showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Check if user is logged in
if (token) {
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    cameraSection.style.display = 'block';
    startCamera();
}

// Handle login
loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const idNumber = document.getElementById('login-idNumber').value;
    const password = document.getElementById('login-password').value;
    
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idNumber, password })
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error);
        }
        
        token = data.token;
        localStorage.setItem('token', token);
        
        loginForm.style.display = 'none';
        cameraSection.style.display = 'block';
        startCamera();
        
    } catch (error) {
        showMessage(error.message, 'error');
    }
});

// Handle registration
registerForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const idNumber = document.getElementById('idNumber').value;
    const password = document.getElementById('password').value;
    
    try {
        // First, capture face descriptor
        if (!capturedImage) {
            showMessage('Please capture your face first', 'error');
            return;
        }

        // Convert base64 image to blob
        const response = await fetch(capturedImage);
        const blob = await response.blob();
        
        // Create form data
        const formData = new FormData();
        formData.append('image', blob, 'face.jpg');
        formData.append('name', name);
        formData.append('idNumber', idNumber);
        formData.append('password', password);
        
        const registerResponse = await fetch(`${API_URL}/register`, {
            method: 'POST',
            body: formData
        });
        
        const data = await registerResponse.json();
        
        if (!registerResponse.ok) {
            throw new Error(data.error);
        }
        
        token = data.token;
        localStorage.setItem('token', token);
        
        registerForm.style.display = 'none';
        cameraSection.style.display = 'block';
        startCamera();
        
    } catch (error) {
        showMessage(error.message, 'error');
    }
});

function showMessage(message, type = 'info') {
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'message';
    }, 5000);
}

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            showMessage('Could not access camera: ' + err, 'error');
        });
}

captureBtn.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    capturedImage = canvas.toDataURL('image/png');
    
    if (registerForm.style.display === 'block') {
        // If registering, show the registration form
        cameraSection.style.display = 'none';
        registerForm.style.display = 'block';
    } else {
        // If verifying, show the verification section
        cameraSection.style.display = 'none';
        verificationSection.style.display = 'block';
    }
});

verifyBtn.addEventListener('click', async function() {
    try {
        blockchainStatus.className = 'blockchain-status pending';
        blockchainStatus.textContent = 'Verifying face and recording on blockchain...';
        
        // Convert base64 image to blob
        const response = await fetch(capturedImage);
        const blob = await response.blob();
        
        // Create form data
        const formData = new FormData();
        formData.append('image', blob, 'face.jpg');
        
        // Send verification request
        const verifyResponse = await fetch(`${API_URL}/verify-face`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        
        const data = await verifyResponse.json();
        
        if (!verifyResponse.ok) {
            throw new Error(data.error);
        }
        
        blockchainStatus.className = 'blockchain-status success';
        blockchainStatus.textContent = 'Verification recorded on blockchain successfully!';
        
        // Get verification history
        const historyResponse = await fetch(`${API_URL}/verification-history`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const historyData = await historyResponse.json();
        const latestVerification = historyData[historyData.length - 1];
        
        resultDiv.textContent = `Verification Status: ${latestVerification.isVerified ? 'Verified' : 'Not Verified'}`;
        
    } catch (error) {
        console.error('Error:', error);
        blockchainStatus.className = 'blockchain-status error';
        blockchainStatus.textContent = 'Error: ' + error.message;
    }
}); 