# The RSA

RSA stands for **Rivest-Shamir-Adleman** (names after `Ron Rivest`, `Adi Shamir and Leonard Adleman`, who published the algorithm in 1977. ).

RSA Algorithm is an asymmetric or public key cryptography algorithm which means it works on two different keys : `public key and private key` .

The `public key ` is used for **encryption** and is known to everyone.

The `private key` is used for **decryption** and must kept secret by the receiver .

RSA Algorithm is based on factorization of large number and modular arthmetic for encrypting and decrypting the data . It consists of three main stages :
    1. **Key Generation :** Creating public and private keys . 
    2. **Encryption :** Sender encrypts the data using receivers public key to get the cipher text . 
    3. **Decryption :** Reciver decrypts the message using his private key and gets the original data.

### **Key Generation :**
    
    - Choose two large prime numbers (p,q) and these should be kept secret .
    - Calculate the product of primes , `n = p * q` . This product is the part of the public as well as the  private key .
    - Calculate **Euler Totient Function** `Φ(n)` as `Φ(n) = Φ(p * q) = Φ(p) * Φ(q) = (p - 1) * (q - 1).`

---
1. **Euler Totient Function**

The Euler’s Totient Function, denoted as ϕ(n) (phi of n), counts the number of positive integers less than n that are relatively prime to n.

So we do this:

- List all numbers less than n

- For each number, check if GCD(number, n) == 1

- Count how many such numbers there are

Let's Do: ϕ(5)

Step 1: Numbers less than 5 → {1, 2, 3, 4}

Step 2: Check GCD with 5

| Number | GCD(number, 5) | Relatively Prime? |
| ------ | -------------- | ----------------- |
| 1      | GCD(1, 5) = 1  | ✅ Yes             |
| 2      | GCD(2, 5) = 1  | ✅ Yes             |
| 3      | GCD(3, 5) = 1  | ✅ Yes             |
| 4      | GCD(4, 5) = 1  | ✅ Yes             |


✅ All are relatively prime!

🔹 So ϕ(5) = 4

**python script :**
```python 
import math 

def phi(n):
    arr = []
    count =0 
    
    for i in range(1,n):
        arr.append(i)
        
    for i in arr:
        if(math.gcd(i , n) == 1):
            count =  count + 1
    print(count)
        

        
phi(100)
```
---
    - Choose encryption exponent **e** , such that 
        - 1 < e < Φ(n), and
        - gcd(e, Φ(n)) = 1, that is e should be co-prime with Φ(n).

    - Calculate decryption exponent d, such that
        - (d * e) ≡ 1 mod Φ(n), that is d is `modular multiplicative inverse` of e mod Φ(n). Some common methods to calculate multiplicative inverse are: `Extended Euclidean Algorithm, Fermat's Little Theorem`, etc.
        - We can have multiple values of d satisfying **(d * e) ≡ 1 mod Φ(n)** but it does not matter which value we choose as all of them are valid keys and will result into same message on decryption.    
---

 `d * e ≡ 1 mod ϕ(n)`

This means:

d is the modular inverse of e with respect to `ϕ(n)`

What does that really mean?

Imagine this:

We already picked:

Two big primes p and q

n = p * q

ϕ(n) = (p - 1)(q - 1)

Then we choose e, the public exponent, such that:

➤ gcd(e, ϕ(n)) = 1 (e and ϕ(n) must be coprime)

Now... to decrypt the message, we need the private exponent d.

So we must find:

d such that: `(d*e) % ϕ(n) = 1`

This is called `Modular multiplicative inverse of e mod ϕ(n)`

To find this we use **Extended Euclidean Algorithm**

---

**Extended Euclidean Algorithm**

    **What is the goal of this "Extended Euclidean Algorithm"?**

    The goal is:

    To find d such that

    `(d * e) % ϕ(n) = 1`

    Which means:

    We want to reverse the multiplication under mod — that's called modular inverse.

    In simpler words, we want:
    ```text
    d = modular_inverse(e, ϕ(n))
    ```
    That’s the only reason we use Extended Euclidean Algorithm.

    Small Example:

    Let’s say:

    `e = 17` (your public key exponent)

    `ϕ(n) = 60` (phi of your modulus)

    We want:
    ```text 
    d such that (d * 17) % 60 = 1
    ```

    This is same as:

    “What number d should I multiply 17 with, so that after mod 60, I get 1?”

    **You can try it manually:**

    Try small numbers:

    ```text
17 * 1 = 17 → 17 % 60 = 17 ❌  
17 * 2 = 34 → 34 % 60 = 34 ❌  
17 * 3 = 51 ❌  
17 * 4 = 68 → 68 % 60 = 8 ❌  
17 * 5 = 85 → 85 % 60 = 25 ❌  
17 * 6 = 102 → 102 % 60 = 42 ❌  
...  
17 * 53 = 901 → 901 % 60 = 1 ✅
```
So answer is :

`d = 53`

**😮‍💨 But what if number is big?**

**We can’t check like that. So we use the Extended Euclidean Algorithm (EEA)**

    What does EEA do?

    It helps you find d such that:
    ```text
    e * d ≡ 1 mod ϕ(n)
    ```
    That's what modular inverse means.

    **How to use it in Python:**
    ```python 
    def mod_inverse(e, phi):
    for d in range(1, phi):
        if (d * e) % phi == 1:
            return d
    ```

    Finally , the public key = (n,e)  and the private key = (n,d).

---

### Encryption 

To encrypt a message **M**, it is first converted to numerical representation using ASCII and other encoding schemes. Now, use the public key (n, e) to encrypt the message and get the cipher text using the formula:

```text
    C = M^e mod n , C is the Ciphet text and M is the plain text .
```

---

### Decryption 
To decrypt the cipher text **C**, use the private key (n, d) and get the original data using the formula:
```text 
M = C^d mod n
```
---

### RSA implementation in Python : 

```python 
from Crypto.Util.number import getPrime, GCD, inverse

def RSA(m):
    # Convert message to integer if it's a string
    if isinstance(m, str):
        m = int.from_bytes(m.encode(), byteorder='big')

    # 1. Key Generation
    p = getPrime(512)
    q = getPrime(512)
    print("p:", p)
    print("q:", q)

    n = p * q
    phi_n = (p - 1) * (q - 1)

    # 2. Choose e such that gcd(e, phi_n) = 1
    e = 65537  # Standard choice
    if GCD(e, phi_n) != 1:
        # fallback if 65537 doesn't work (rare)
        for i in range(3, phi_n):
            if GCD(i, phi_n) == 1:
                e = i
                break

    # 3. Compute d (modular inverse of e)
    d = inverse(e, phi_n)

    print("Public Key (e, n):", (e, n))
    print("Private Key (d, n):", (d, n))

    # 4. Encryption: c = m^e mod n
    c = pow(m, e, n)
    print("Encrypted:", c)

    # 5. Decryption: m = c^d mod n
    decrypted = pow(c, d, n)
    print("Decrypted (int):", decrypted)

    # Convert back to string if original was string
    try:
        print("Decrypted (text):", decrypted.to_bytes((decrypted.bit_length() + 7) // 8, byteorder='big').decode())
    except:
        print("Decryption failed to convert to text.")

# Run it
RSA("sunil kumar")

```

**Output :**
```text 
p: 12205547220883031400690490141219338523290356681230478025559900957655415124719217146673042184355296090159712599328044115425031304415387216857326674121954653
q: 10983825226280047584992237059012662285767073210074289415611130630940449915118583894185790005293083572460524516183715163225666388752625636229495684364701413
Public Key (e, n): (65537, 134063597465287368316971322999877933153854612495050089590805112908672859032019157998748283929475534595019555087229266437098180392242040319650509350957086670629239808352975048975262859664436655098759441346318976234112651702387281221016813135584752833224011182924812463238948160157598696351847962085048271024689)
Private Key (d, n): (125271535852674567776416479991295371292688139746774683559688638622674477230599832410475703183806891726267643224237194979041693532516140609656797566920381299152692941878756199093208283076474949657826576056190769423806723279678891924664703578986682589631552582974989297826624366233046289118386669609714507910801, 134063597465287368316971322999877933153854612495050089590805112908672859032019157998748283929475534595019555087229266437098180392242040319650509350957086670629239808352975048975262859664436655098759441346318976234112651702387281221016813135584752833224011182924812463238948160157598696351847962085048271024689)
Encrypted: 5248983633440025450012823754988542183302115082266452608827773568997811554326289701812798868948994939742526696372947029802172429595368474476270382373157977846319714208363278651732482110001534600090049358146434594610787387485351596707297796470600105634358905089752473419981532808408482756491391657186270304674
Decrypted (int): 139581022872508529002766706
Decrypted (text): sunil kumar
```