# Credstuff

## Challenge 

![credstuff](../../../../static/img/credstuff.PNG)

In this challenge we have been given `leak.tar` file  , that file contains large number of usernames and passwords .

So , To solve the challenge we need to find the password that matches with the user name  and decrypt it to get the flag .

So firstly , I have seperated the usernames and passwords and made two files `usernames.txt` and `passwords.txt`(just copied and pasted the usernames in usernames.txt and passwords in passwords.txt) .

## Solution 

```terminal 
sunil-kumar@DESKTOP-GBKN3LB:/mnt/c/Users/Sunil Kumar/Desktop$ LINE_NUMBER=$(grep -n "cultiris" usernames.txt | cut -d: -f1)
sunil-kumar@DESKTOP-GBKN3LB:/mnt/c/Users/Sunil Kumar/Desktop$ awk "NR==$LINE_NUMBER" passwords.txt
cvpbPGS{P7e1S_54I35_71Z3}
```
Here with the linux commands i got the encrypted flag `cvpbPGS{P7e1S_54I35_71Z3}`

After some observation , i came to know that the flag is encrypted using `ROT13` mechanism 

**What is ROT13 ?**

`ROT13`(short for `rotate by 13 places`) is a simple letter substitution cipher that shifts each letter in the alphabet 13 positions. It's a special case of the Caesar cipher, where the shift is always 13. This means "A" becomes "N", "B" becomes "O", and so on

So we can use online tools to decode that or use python script 

**Python script that decrypts the ROT13 Cipher**

```python 
def rot13_decrypt(text):
    
    result = ""
    for char in text:
        if 'a' <= char <= 'z':
            result += chr(((ord(char) - ord('a') + 13) % 26) + ord('a'))
        elif 'A' <= char <= 'Z':
            result += chr(((ord(char) - ord('A') + 13) % 26) + ord('A'))
        else:
            result += char
    return result

encrypted_text = "cvpbPGSP7e1S_54I35_71Z3"
decrypted_text = rot13_decrypt(encrypted_text)
print(f"Encrypted: {encrypted_text}")
print(f"Decrypted: {decrypted_text}")

```
**Output:**
```terminal 
Encrypted: cvpbPGSP7e1S_54I35_71Z3
Decrypted: picoCTFC7r1F_54V35_71M3
```

So the Flag is : 

**Flag :**  `picoCTF{C7r1F_54V35_71M3}`