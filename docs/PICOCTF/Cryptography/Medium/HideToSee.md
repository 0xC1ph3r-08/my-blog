## Challenge Link: [HideToSee](https://play.picoctf.org/practice/challenge/351?category=2&page=2)
### Description
The challenge involved extracting hidden information from an image using steganography. The extracted data was an encrypted text file, which, when decoded, revealed the flag.

### Solution

#### Steganography
To extract the hidden data, I used **Steghide** to retrieve the data from the image. The following command was used:

```bash
steghide info atbash.jpg
```
atbash.jpg is the image file provided with the challenge. The command extracts the hidden data from the image.

### Decryption
The extracted file was encrypted. The image description gave a hint toward the Atbash Cipher. I used an Atbash cipher decoder to decrypt the contents of the file.

### Flag
The decrypted text revealed the flag:

```bash
picoCTF{atbash_crack_7142fwd9}
```
### Summary
In this challenge, I utilized Steghide to extract hidden data from an image, identified the Atbash Cipher for decryption, and successfully obtained the flag.
