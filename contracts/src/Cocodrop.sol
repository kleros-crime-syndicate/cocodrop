/**
 * @authors: [@greenlucid, @iamnowhere]
 * @reviewers: []
 * @auditors: []
 * @bounties: []
 * @deployments: []
 * SPDX-License-Identifier: Licenses are not real
 */

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

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
  event Redemption(uint256 indexed airdropId, address receiver, uint256 amount);

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

  function redeem(uint256 _airdropId, address _receiver, bytes32[] memory _merkleProof) public {
    // magic proving goes here

    // check the amount is under or equal pending amount by the airdrop
    redeemed[_airdropId][_receiver] = true;
    // reduce the amount of the airdrop by the amount redeemed
    // transfer goes here
    uint256 amount = 0; // made up, please change
    emit Redemption(_airdropId, _receiver, amount);
  }
}