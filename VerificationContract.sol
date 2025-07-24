// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VerificationContract {
    struct Verification {
        string name;
        string idNumber;
        bool isVerified;
        uint256 timestamp;
    }
    
    mapping(string => Verification) public verifications;
    
    event VerificationRecorded(
        string name,
        string idNumber,
        bool isVerified,
        uint256 timestamp
    );
    
    function recordVerification(
        string memory _name,
        string memory _idNumber,
        bool _isVerified
    ) public {
        verifications[_idNumber] = Verification({
            name: _name,
            idNumber: _idNumber,
            isVerified: _isVerified,
            timestamp: block.timestamp
        });
        
        emit VerificationRecorded(
            _name,
            _idNumber,
            _isVerified,
            block.timestamp
        );
    }
    
    function getVerification(string memory _idNumber) 
        public 
        view 
        returns (string memory name, bool isVerified, uint256 timestamp) 
    {
        Verification memory verification = verifications[_idNumber];
        return (verification.name, verification.isVerified, verification.timestamp);
    }
} 