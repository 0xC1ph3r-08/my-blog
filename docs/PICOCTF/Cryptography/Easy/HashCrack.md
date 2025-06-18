# Hashcrack

### Challenge:

Author: Nana Ama Atombo-Sackey

Description: A company stored a secret message on a server which got breached due to the admin using weakly hashed passwords. Can you gain access to the secret stored within the server?
Access the server using `nc verbal-sleep.picoctf.net 62644`

Challenge Link : [hashtrack](https://play.picoctf.org/practice/challenge/475?category=2&page=1)

**Given:** `nc verbal-sleep.picoctf.net 62644`

**Explanation:**
The command `nc verbal-sleep.picoctf.net 62644` instructs the Netcat utility (`nc`) to establish a network connection to the server located at the hostname `verbal-sleep.picoctf.net` on port number `62644`.

## How I approached

When I ran that command in the Ubuntu terminal, I was prompted with:

```terminal
sunil-kumar@DESKTOP-GBKN3LB:~$ nc verbal-sleep.picoctf.net 62644
Welcome!! Looking For the Secret?

We have identified a hash: 482c811da5d5b4bc6d497ffa98491e38
Enter the password for identified hash:
```

Firstly, I tried `"password"` as the password, but it said:

```terminal
Incorrect. Goodbye.
```

Then, I observed the given hash `"482c811da5d5b4bc6d497ffa98491e38"` and recognized that it is an MD5 hash (Message Digest Algorithm).

## A brief about the MD5 hash algorithm:

MD5 is a widely used cryptographic hash function that takes an input of arbitrary length and produces a fixed-length output of 128 bits (16 bytes). This output is often represented as a 32-character hexadecimal number.

Think of it like a digital fingerprint for data. Any change to the original data, no matter how small, will (with a very high probability) result in a completely different MD5 hash. This property is known as the avalanche effect.

MD5 was designed by Ronald Rivest in 1991 as an improvement over an earlier hash function, MD4. It was standardized in RFC 1321 in 1992.

After decrypting that hash using an online tool, I got the password `"password123"`.

So, I proceeded by entering it:

```terminal
sunil-kumar@DESKTOP-GBKN3LB:~$ nc verbal-sleep.picoctf.net 62644
Welcome!! Looking For the Secret?

We have identified a hash: 482c811da5d5b4bc6d497ffa98491e38
Enter the password for identified hash: password123
Correct! You've cracked the MD5 hash with no secret found!

Flag is yet to be revealed!! Crack this hash: b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3
Enter the password for the identified hash:
```

Again, I was prompted with a hash (`b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3`) and asked for the password.

This hash is a SHA-1 hash, so I decrypted it using online decrypt tools (e.g., https://md5hashing.net/hash/sha1/b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3).

## A brief about the SHA-1 hash algorithm:

SHA-1 (Secure Hash Algorithm 1) is a cryptographic hash function designed by the U.S. National Security Agency (NSA) and published in 1995 as a U.S. Federal Information Processing Standard (FIPS).

Here's a brief overview:

- **Input:** Takes an input message of arbitrary length (up to $2^{64} - 1$ bits).
- **Output:** Produces a fixed-size 160-bit (20-byte) hash value, often represented as a 40-character hexadecimal number, known as a message digest.
- **One-way function:** It's computationally infeasible to reverse the process and obtain the original message from its hash.
- **Deterministic:** The same input message will always produce the same SHA-1 hash.
- **Avalanche effect:** Even a small change in the input message will result in a significantly different hash value.

After decrypting that, I got the password `"letmein"`. I proceeded by entering it:

```terminal
sunil-kumar@DESKTOP-GBKN3LB:~$ nc verbal-sleep.picoctf.net 62644
Welcome!! Looking For the Secret?

We have identified a hash: 482c811da5d5b4bc6d497ffa98491e38
Enter the password for identified hash: password123
Correct! You've cracked the MD5 hash with no secret found!

Flag is yet to be revealed!! Crack this hash: b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3
Enter the password for the identified hash: letmein
Correct! You've cracked the SHA-1 hash with no secret found!

Almost there!! Crack this hash: 916e8c4f79b25028c9e467f1eb8eee6d6bbdff965f9928310ad30a8d88697745
Enter the password for the identified hash:
```

Then, I was again given a hash (`916e8c4f79b25028c9e467f1eb8eee6d6bbdff965f9928310ad30a8d88697745`) and asked for the password.

This hash is a SHA-256 hash, so I decrypted that and got `"qwerty098"` as the password.

## SHA-256 algorithm brief:

SHA-256 (Secure Hash Algorithm 256-bit) is another member of the SHA-2 family of cryptographic hash functions, designed by the National Security Agency (NSA) and published by the National Institute of Standards and Technology (NIST) in 2001. It's a significant step up in security compared to SHA-1.

Here's a brief overview:

- **Input:** Takes an input message of arbitrary length (up to $2^{64} - 1$ bits).
- **Output:** Produces a fixed-size 256-bit (32-byte) hash value, typically represented as a 64-character hexadecimal number, known as a message digest.
- **One-way function:** Like MD5 and SHA-1, it's computationally infeasible to reverse the process and obtain the original message from its hash.
- **Deterministic:** The same input will always yield the same SHA-256 hash.
- **Strong Avalanche Effect:** Even a tiny alteration in the input results in a drastically different hash.

So, I entered it:

```terminal
sunil-kumar@DESKTOP-GBKN3LB:~$ nc verbal-sleep.picoctf.net 62644
Welcome!! Looking For the Secret?

We have identified a hash: 482c811da5d5b4bc6d497ffa98491e38
Enter the password for identified hash: password123
Correct! You've cracked the MD5 hash with no secret found!

Flag is yet to be revealed!! Crack this hash: b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3
Enter the password for the identified hash: letmein
Correct! You've cracked the SHA-1 hash with no secret found!

Almost there!! Crack this hash: 916e8c4f79b25028c9e467f1eb8eee6d6bbdff965f9928310ad30a8d88697745
Enter the password for the identified hash: qwerty098
Correct! You've cracked the SHA-256 hash with a secret found.
The flag is: picoCTF{UseStr0nG_h@shEs_&PaSswDs!_3eb19d03}
```

Hurray! Finally got the flag!

**Flag:** `picoCTF{UseStr0nG_h@shEs_&PaSswDs!_3eb19d03}`

## Final solution:

```terminal
sunil-kumar@DESKTOP-GBKN3LB:~$ nc verbal-sleep.picoctf.net 62644
Welcome!! Looking For the Secret?

We have identified a hash: 482c811da5d5b4bc6d497ffa98491e38
Enter the password for identified hash: password123
Correct! You've cracked the MD5 hash with no secret found!

Flag is yet to be revealed!! Crack this hash: b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3
Enter the password for the identified hash: letmein
Correct! You've cracked the SHA-1 hash with no secret found!

Almost there!! Crack this hash: 916e8c4f79b25028c9e467f1eb8eee6d6bbdff965f9928310ad30a8d88697745
Enter the password for the identified hash: qwerty098
Correct! You've cracked the SHA-256 hash with a secret found.
The flag is: picoCTF{UseStr0nG_h@shEs_&PaSswDs!_3eb19d03}
```

## What I learnt?

1.  **MD5 algorithm:** Understanding its basic properties as a hashing algorithm and its vulnerability to cracking.
2.  **SHA-1 and SHA-256:** Learning about these more secure hashing algorithms and their increased complexity compared to MD5.
3.  **`nc verbal-sleep.picoctf.net 62644`:** Understanding that this command uses the Netcat utility (`nc`) to establish a direct network connection to a specified host (`verbal-sleep.picoctf.net`) and port (`62644`), allowing for interactive communication with the server. It's used here to interact with the challenge server, receive the hashes, and send the cracked passwords.
