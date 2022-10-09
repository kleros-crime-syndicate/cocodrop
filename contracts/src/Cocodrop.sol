// SPDX-License-Identifier: MIT

/**
 * @authors: [@greenlucid, @shotaronowhere, @jaybuidl]
 * @reviewers: []
 * @auditors: []
 * @bounties: []
 * @deployments: []
 */

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

/**
 * @title Cocodrop
 * @notice ...
 * @dev ...
 */
contract Cocodrop {

  struct Airdrop {
    address owner;
    bytes32 merkleRoot;
    IERC20 token;
    uint256 amount;
  }

  event NewAirdrop(uint256 indexed airdropId, bytes32 merkleRoot, IERC20 token, uint256 amount, string ipfs);
  event StoppedAirdrop(uint256 indexed airdropId);
  event Redemption(uint256 indexed airdropId, uint256 amount);

  Airdrop[] public airdrops;
  mapping(uint256 => mapping(address => bool)) public redeemed;


  function createAirdrop(bytes32 _merkleRoot, IERC20 _token, uint256 _amount, string calldata _ipfs) external {
    require(_token.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
    airdrops.push(Airdrop({
      owner: msg.sender,
      merkleRoot: _merkleRoot,
      token: _token,
      amount: _amount
    }));
    emit NewAirdrop(airdrops.length - 1, _merkleRoot, _token, _amount, _ipfs);
  }

  function stopAirdrop(uint256 _airdropId) external {
    Airdrop storage airdrop = airdrops[_airdropId];    
    // check
    require(msg.sender == airdrop.owner, "Owner only");
    require(airdrop.amount > 0, "Already stopped");    
    // effects
    uint256 amountToSend = airdrop.amount;
    airdrop.amount = 0;
    // interact
    require(airdrop.token.transferFrom(address(this), msg.sender, amountToSend), "Transfer failed");
  }

  function redeem(uint256 _airdropId, uint256 _claimedAmount, bytes32[] memory _merkleProof) public {
    uint256 airdropBalance = airdrops[_airdropId].amount;
    // check
    require(_claimedAmount <= airdropBalance, "Insufficient airdrop balance");
    require(!redeemed[_airdropId][msg.sender], "Already redeemed");
    require(verifyClaim(_airdropId, _claimedAmount, _merkleProof), "Invalid redemption");
    // effects
    redeemed[_airdropId][msg.sender] = true;
    airdrops[_airdropId].amount -= _claimedAmount;
    // interact
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
      // less gas efficient than assembly, but this suffices for v1
      bytes32 leaf = keccak256(abi.encodePacked(msg.sender, _claimedAmount));
      return MerkleProof.verify(_merkleProof, airdrops[_airdropId].merkleRoot, leaf);
    }
}
