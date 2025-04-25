# Level 0 : Hello Ethernaut

I successfully completed **Level 0** of the [Ethernaut](https://ethernaut.openzeppelin.com/) Web3 wargame. This level introduced me to basic smart contract interactions using the browser console, helping me build foundational skills in reading and invoking Solidity methods through Web3.

---

## 🧠 Key Concepts Learned

- 🔍 Interacting with smart contracts using the browser developer console  
- 🧪 Reading and calling public contract methods via Web3  
- 🔑 Understanding Solidity method naming conventions  
- ⛓ Submitting transactions and confirming them via MetaMask  
- 💰 Using Web3 utility functions like `getBalance`  

---

## 🛠 Commands and Utilities Used

| Command              | Description                                                   |
|---------------------|---------------------------------------------------------------|
| `player`            | Retrieves the current connected wallet address (via MetaMask) |
| `getBalance(player)`| Returns the Ether balance (in wei) of the connected wallet    |

---

## ✅ Solution Walkthrough

### 🔹 Step-by-Step Interaction

```javascript
await contract.info()
// → 'You will find what you need in info1().'

await contract.info1()
// → 'Try info2(), but with "hello" as a parameter.'

await contract.info2('hello')
// → 'The property infoNum holds the number of the next info method to call.'

await contract.infoNum()
// → '42'

await contract.info42()
// → 'theMethodName is the name of the next method.'

await contract.theMethodName()
// → 'The method name is method7123949.'

await contract.method7123949()
// → 'If you know the password, submit it to authenticate().'

await contract.password()
// → 'ethernaut0'

await contract.authenticate('ethernaut0')
// → Transaction sent via MetaMask. Once confirmed, the challenge is complete!
```
---
## 🎯 Outcome
After calling the authenticate() method with the correct password, the transaction was confirmed via MetaMask, and the level was successfully completed.

---

## 🧪 Skills Practiced
Console-based smart contract exploration

Dynamic method discovery and invocation

Reading and interpreting contract state

Submitting transactions on the Ethereum blockchain