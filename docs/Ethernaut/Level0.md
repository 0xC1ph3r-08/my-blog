# Ethernaut Level 0 – Instance Solved ✅

## 🎯 Goal of the Level

The objective of Level 0 was to **call a specific method on a Solidity smart contract** to unlock the level. It’s designed to introduce players to basic smart contract interaction through the browser console using MetaMask and a frontend ABI interface.

---

## 🧠 What I Learned

- How to **connect MetaMask** to an in-browser Solidity console.
- How to **read the ABI** and available contract functions directly from the browser.
- How to **call `view` functions** and **send transactions**.
- How to troubleshoot common issues like `ReferenceError` and pending transactions.
- How to **confirm on-chain interactions using MetaMask** and wait for mined transactions.

---

## 🧪 Commands I Used

```js
// 1. Get your address from MetaMask (player variable is pre-defined in Ethernaut)
player

// 2. Explore the contract's view functions
await contract.info()
await contract.info1()
await contract.info2("hello")
await contract.infoNum()

// 3. Follow the hints provided by returned messages
await contract.info42()
await contract.method7123949()
await contract.password()

// 4. Try submitting the password
await contract.authenticate("ethernaut0")
