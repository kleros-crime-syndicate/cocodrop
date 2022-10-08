// SPDX-License-Identifier: MIT

/**
 * @authors: [@greenlucid, @shotaronowhere]
 * @reviewers: []
 * @auditors: []
 * @bounties: []
 * @deployments: []
 */

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

/**
 * @title Cocodrop
 * @notice ...
 * @dev ...
 */
contract Cocodrop {

  struct Airdrop {
    bytes32 merkleRoot;
    IERC20 token;
    uint256 amount;
  }

  event NewAirdrop(uint256 indexed airdropId, bytes32 merkleRoot, IERC20 token, uint256 amount, string ipfs);
  event Redemption(uint256 indexed airdropId, uint256 amount);

  Airdrop[] public airdrops;
  mapping(uint256 => mapping(address => bool)) public redeemed;


  function createAirdrop(bytes32 _merkleRoot, IERC20 _token, uint256 _amount, string calldata _ipfs) external {
    require(_token.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
    airdrops.push(Airdrop({
      merkleRoot: _merkleRoot,
      token: _token,
      amount: _amount
    }));
    emit NewAirdrop(airdrops.length - 1, _merkleRoot, _token, _amount, _ipfs);
  }

  function redeem(uint256 _airdropId, uint256 _claimedAmount, bytes32[] memory _merkleProof) public {
    uint256 airdropBalance = airdrops[_airdropId].amount;
    // check
    require(_claimedAmount <= airdropBalance, "Insufficient airdrop balance.");
    require(!redeemed[_airdropId][msg.sender], "Already redeemed");
    require(verifyClaim(_airdropId, _claimedAmount, _merkleProof), "Invalid redemption.");
    // effects
    redeemed[_airdropId][msg.sender] = true;
    airdrops[_airdropId].amount -= _claimedAmount;
    // transfer goes here
    airdrops[_airdropId].token.transfer(msg.sender, _claimedAmount);
    emit Redemption(_airdropId, _claimedAmount);
  }

    /**
     * @notice Verifies a claim.
     * @param _claimedAmount The amount being claimed.
     * @param _merkleProof The merkle proof for the claim, sorted from the leaf to the root of the tree.
     * @param _airdropId The id of the airdrop.
     */
    function verifyClaim(
        uint256 _airdropId,
        uint256 _claimedAmount,
        bytes32[] memory _merkleProof
    )
        public
        view
        returns (bool valid)
    {
      bytes32 leaf;
      address sender = msg.sender;
      assembly {
        // efficient hash abi.encode(msg.sender, _claimedAmount)
        mstore(0x00, sender)
        mstore(0x20, _claimedAmount)
        leaf := keccak256(0x00, 0x40)
      }
      return MerkleProof.verify(_merkleProof, airdrops[_airdropId].merkleRoot, leaf);
    }
}