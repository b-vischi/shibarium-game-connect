// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GameItems is ERC1155, Ownable {
    uint256 public constant SWORD = 1;
    uint256 public constant SHIELD = 2;
    uint256 public constant POTION = 3;

    constructor() ERC1155("https://game.example/api/item/{id}.json") Ownable(msg.sender) {
        _mint(msg.sender, SWORD, 1, "");
        _mint(msg.sender, SHIELD, 1, "");
        _mint(msg.sender, POTION, 10, "");
    }
}
