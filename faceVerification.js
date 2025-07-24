const faceapi = require('face-api.js');
const canvas = require('canvas');
const { Canvas, Image, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

class FaceVerificationService {
    constructor() {
        this.initialized = false;
    }

    async initialize() {
        if (this.initialized) return;

        // Load face-api models
        await faceapi.nets.ssdMobilenetv1.loadFromDisk('./models');
        await faceapi.nets.faceLandmark68Net.loadFromDisk('./models');
        await faceapi.nets.faceRecognitionNet.loadFromDisk('./models');

        this.initialized = true;
    }

    async detectFace(imageBuffer) {
        await this.initialize();

        const img = await canvas.loadImage(imageBuffer);
        const detections = await faceapi.detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptor();

        return detections;
    }

    async compareFaces(faceDescriptor1, faceDescriptor2) {
        const distance = faceapi.euclideanDistance(faceDescriptor1, faceDescriptor2);
        // Lower distance means more similar faces
        return distance < 0.6; // Threshold can be adjusted
    }

    async verifyFace(imageBuffer, storedDescriptor) {
        try {
            const detection = await this.detectFace(imageBuffer);
            
            if (!detection) {
                return {
                    success: false,
                    error: 'No face detected in the image'
                };
            }

            const isMatch = await this.compareFaces(detection.descriptor, storedDescriptor);
            
            return {
                success: true,
                isMatch,
                descriptor: detection.descriptor
            };
        } catch (error) {
            console.error('Face verification error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }
}

module.exports = new FaceVerificationService(); 