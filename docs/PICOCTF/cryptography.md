##  Challenge : HideToSee 

**Challenge Link:** [HideToSee](https://play.picoctf.org/practice/challenge/351?category=2&page=2)

### Description

The challenge involved extracting hidden information from an image using steganography. The extracted data was an encrypted text file, which, when decoded, revealed the flag.

### Solution

1.  **Steganography:** I used Steghide to extract the hidden data from the image. The command used was:

    ```bash
    steghide info atbash.jp""
    ```
    atbash.jpg is the image , we can get it in the problem

    
    This command extracts data from the image `hidetosee.jpg`.

2.  **Decryption:** The extracted file was encrypted. The image description hinted at the Atbash Cipher. I used an Atbash cipher decoder to decrypt the contents of the file.

3.  **Flag:** The decrypted text contained the flag:

    ```
    picoCTF{atbash_crack_7142fwd9}
    ```
