# Vigenere

### Challenge 

**Description** 

Can you decrypt this message?
Decrypt this message using this key "CYLAB".

**The given message** : `rgnoDVD{O0NU_WQ3_G1G3O3T3_A1AH3S_2951c89f}`

**Hint** 

- https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher

### Solution

Hint and the challenge name itself says that to encrypt that message they used `VIGENERE CIPHER` technique . So what it is ? 

### Vigenere Cipher

The `Vigenère cipher` is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It's a polyalphabetic substitution cipher, meaning that each letter of the plaintext can be encrypted to a different ciphertext letter, depending on its position and the key. This makes it significantly more secure than simple substitution ciphers (like the Caesar cipher), which always substitute a given plaintext letter with the same ciphertext letter.

For nearly three centuries, the Vigenère cipher was considered unbreakable and was even known as "le chiffre indéchiffrable" (the indecipherable cipher). However, it was eventually broken using methods like Kasiski examination and frequency analysis.

**How it Works: The Vigenère Square (Tabula Recta)**

The Vigenère cipher typically uses a Vigenère Square (also known as a tabula recta). This is a 26x26 grid of alphabets.

- The first row is the standard alphabet (A to Z).
- Each subsequent row is a Caesar cipher shift of the row above it, moving one position to the left. So, the second row starts with B, the third with C, and so on.

**Here's the  representation of the Vigenère Square:**

![VignereCipherTable](https://pages.mtu.edu/~shene/NSF-4/Tutorial/VIG/FIG-VIG-Table.jpg)

**Encryption Process**

To encrypt a plaintext message using the Vigenère cipher, you need:

- Plaintext: The message you want to encrypt.
- Keyword: A secret word or phrase.

The steps are as follows:

- Prepare the Keyword: Repeat the keyword until its length matches the length of the plaintext. For example, if your plaintext is "ATTACKATDAWN" and your keyword is "LEMON", you'd extend the key to "LEMONLEMONLE".
- Align Plaintext and Key: Write the plaintext and the extended key aligned character by character.
- Encrypt Each Letter: For each letter in the plaintext:
    - Find the plaintext letter in the top row of the Vigenère Square.
    - Find the corresponding key letter in the leftmost column (or vice versa, but consistency is key).
    - The ciphertext letter is found at the intersection of the row (of the key letter) and the column (of the      plaintext letter).

**Encryption Example:**

Let's encrypt `Plaintext: ATTACKATDAWN` with `Keyword: LEMON`

1. Plaintext: A T T A C K A T D A W N
2. Extended Key: L E M O N L E M O N L E

Now, encrypt each pair using the Vigenère Square:

A (Plaintext) + L (Key): Find 'A' in the top row, 'L' in the left column. Their intersection is L.

T (Plaintext) + E (Key): Find 'T' in the top row, 'E' in the left column. Their intersection is X.

T (Plaintext) + M (Key): Find 'T' in the top row, 'M' in the left column. Their intersection is F.

A (Plaintext) + O (Key): Find 'A' in the top row, 'O' in the left column. Their intersection is O.

C (Plaintext) + N (Key): Find 'C' in the top row, 'N' in the left column. Their intersection is P.

K (Plaintext) + L (Key): Find 'K' in the top row, 'L' in the left column. Their intersection is V.

A (Plaintext) + E (Key): Find 'A' in the top row, 'E' in the left column. Their intersection is E.

T (Plaintext) + M (Key): Find 'T' in the top row, 'M' in the left column. Their intersection is F.

D (Plaintext) + O (Key): Find 'D' in the top row, 'O' in the left column. Their intersection is R.

A (Plaintext) + N (Key): Find 'A' in the top row, 'N' in the left column. Their intersection is N.

W (Plaintext) + L (Key): Find 'W' in the top row, 'L' in the left column. Their intersection is H.

N (Plaintext) + E (Key): Find 'N' in the top row, 'E' in the left column. Their intersection is R.

**Ciphertext:** `LXFOPVEFRNHR`

**Decryption Process**

To decrypt a ciphertext message, you need:

- Ciphertext: The encrypted message.
- Keyword: The same secret word or phrase used for encryption.

The steps are as follows:

- Prepare the Keyword: Repeat the keyword until its length matches the length of the ciphertext.
- Align Ciphertext and Key: Write the ciphertext and the extended key aligned character by character.
- Decrypt Each Letter: For each letter in the ciphertext:
    - Find the key letter in the leftmost column of the Vigenère Square. This determines the row you will use.
    - Within that key letter's row, find the ciphertext letter.
    - The plaintext letter is found at the top of the column where the ciphertext letter was located.

**Decryption Example:**

Let's decrypt `Ciphertext: LXFOPVEFRNHR` with `Keyword: LEMON`

- Ciphertext: L X F O P V E F R N H R
- Extended Key: L E M O N L E M O N L E

Now, decrypt each pair using the Vigenère Square:

L (Key) + L (Ciphertext): Go to row 'L'. Find 'L' in that row. The column header is A.

E (Key) + X (Ciphertext): Go to row 'E'. Find 'X' in that row. The column header is T.

M (Key) + F (Ciphertext): Go to row 'M'. Find 'F' in that row. The column header is T.

O (Key) + O (Ciphertext): Go to row 'O'. Find 'O' in that row. The column header is A.

N (Key) + P (Ciphertext): Go to row 'N'. Find 'P' in that row. The column header is C.

L (Key) + V (Ciphertext): Go to row 'L'. Find 'V' in that row. The column header is K.

E (Key) + E (Ciphertext): Go to row 'E'. Find 'E' in that row. The column header is A.

M (Key) + F (Ciphertext): Go to row 'M'. Find 'F' in that row. The column header is T.

O (Key) + R (Ciphertext): Go to row 'O'. Find 'R' in that row. The column header is D.

N (Key) + N (Ciphertext): Go to row 'N'. Find 'N' in that row. The column header is A.

L (Key) + H (Ciphertext): Go to row 'L'. Find 'H' in that row. The column header is W.

E (Key) + R (Ciphertext): Go to row 'E'. Find 'R' in that row. The column header is N.

**Decrypted Plaintext:** `ATTACKATDAWN`

**Algebraic Description**

The Vigenère cipher can also be described using modular arithmetic. Assign each letter a numerical value from 0 to 25 (A=0, B=1, ..., Z=25).

Let P be the plaintext letter, K be the key letter, and C be the ciphertext letter.

- Encryption: 
    - Ci=(Pi+Ki)(mod26)

    - Where Pi is the numerical value of the i-th plaintext letter, Kiis the numerical value of the i-th key letter(repeated), and Ci is the numerical value of the i-th ciphertext letter.

- Decryption: 
    - Pi=(Ci−Ki+26)(mod26)
    - We add 26 before taking the modulo to ensure a positive result even if Ci−Ki is negative.

**Algebraic Example (Encryption):**

**Let's encrypt 'A' (0) with key 'L' (11) from "ATTACKATDAWN" and "LEMON":**

C=(0+11)(mod26)

C=11(mod26)

C=11 (which corresponds to 'L')

**Let's encrypt 'T' (19) with key 'E' (4):**

C=(19+4)(mod26)

C=23(mod26)

C=23 (which corresponds to 'X')

**Algebraic Example (Decryption):**

**Let's decrypt 'L' (11) with key 'L' (11):**

P=(11−11+26)(mod26)

P=26(mod26)

P=0 (which corresponds to 'A')

**Let's decrypt 'X' (23) with key 'E' (4):**

P=(23−4+26)(mod26)

P=45(mod26)

P=19 (which corresponds to 'T')

**So , To get the flag I wrote python script that decrypts the Vigenere Cipher and Here it is :**

### Python code for decryption 
```python 
def vigenere_decrypt(ciphertext, key):
    
    plaintext = ""
    key = key.upper()  # Ensure key is uppercase
    ciphertext = ciphertext.upper()  # Ensure ciphertext is uppercase
    key_index = 0

    for char in ciphertext:
        if 'A' <= char <= 'Z':  # Process only alphabetic characters
            # Convert character to a number (A=0, B=1, ...)
            cipher_char_value = ord(char) - ord('A')
            key_char_value = ord(key[key_index % len(key)]) - ord('A')

            # Vigenere decryption formula: P = (C - K + 26) mod 26
            decrypted_char_value = (cipher_char_value - key_char_value + 26) % 26

            # Convert number back to character
            plaintext += chr(decrypted_char_value + ord('A'))

            # Move to the next key character
            key_index += 1
        else:
            # If the character is not an alphabet, append it as is
            plaintext += char
            # Do not increment key_index for non-alphabetic characters
            
    return plaintext

# --- Example Usage ---
if __name__ == "__main__":
    encrypted_text = "rgnoDVD{O0NU_WQ3_G1G3O3T3_A1AH3S_2951c89f}"
    encryption_key = "CYLAB"

    decrypted_message = vigenere_decrypt(encrypted_text, encryption_key)
    print(f"Encrypted Text: {encrypted_text}")
    print(f"Encryption Key: {encryption_key}")
    print(f"Decrypted Message: {decrypted_message}")

```

After execution, this is the output

```terminal
Encrypted Text: rgnoDVD{O0NU_WQ3_G1G3O3T3_A1AH3S_2951c89f}
Encryption Key: CYLAB
Decrypted Message: PICOCTF{D0NT_US3_V1G3N3R3_C1PH3R_2951A89H}
PS C:\Users\Sunil Kumar\Desktop\vigenere>
```

Hence I got the , `picoCTF{D0NT_US3_V1G3N3R3_C1PH3R_2951A89H}`