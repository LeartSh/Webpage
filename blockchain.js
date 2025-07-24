const { ethers } = require('ethers');
require('dotenv').config();

class BlockchainService {
    constructor() {
        this.provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_RPC_URL);
        this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);
        
        // Contract ABI
        this.contractABI = [
            "function recordVerification(string memory _name, string memory _idNumber, bool _isVerified) public",
            "function getVerification(string memory _idNumber) public view returns (string memory name, bool isVerified, uint256 timestamp)"
        ];
        
        this.contract = new ethers.Contract(
            process.env.CONTRACT_ADDRESS,
            this.contractABI,
            this.wallet
        );
    }

    async recordVerification(name, idNumber, isVerified) {
        try {
            const tx = await this.contract.recordVerification(name, idNumber, isVerified);
            await tx.wait();
            return {
                success: true,
                transactionHash: tx.hash
            };
        } catch (error) {
            console.error('Blockchain error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    async getVerification(idNumber) {
        try {
            const verification = await this.contract.getVerification(idNumber);
            return {
                success: true,
                data: {
                    name: verification[0],
                    isVerified: verification[1],
                    timestamp: verification[2]
                }
            };
        } catch (error) {
            console.error('Blockchain error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }
}

module.exports = new BlockchainService(); 