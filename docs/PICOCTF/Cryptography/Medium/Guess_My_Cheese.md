# Guess My Cheese Part1

### challenge: 

Author: aditin

Description: Try to decrypt the secret cheese password to prove you're not the imposter!
Connect to the program on our server: `nc verbal-sleep.picoctf.net 53407`

[Challenge Link](https://play.picoctf.org/practice/challenge/473?category=2&page=1)

Hint: Remember that cipher we devised together Squeexy? The one that incorporates your affinity for linear equations???

## How i went through the challege

The challenge presented an intriguing scenario: determine the real Squeexy by guessing an encrypted "cheese." Upon connecting to the server using netcat verbal-sleep.picoctf.net 53407, I was greeted with a story about an evil clone and a secret encrypted cheese: "HIJJMOBE." The prompt offered two options: encrypt a cheese ('e') or guess the cheese ('g').

Initially confused about what kind of "cheese" was being referred to, I took a cue from the hint mentioning "top secret and limited edition" cheeses. A quick search for "top cheeses" revealed a list including cheddar, mozzarella, Parmesan, Swiss, and feta.

My breakthrough came when I tried encrypting one of these common cheeses. Choosing 'e' for encrypt and then inputting "feta" yielded an encrypted form: "RKLI." This confirmed that the challenge involved a substitution cipher based on the hint about linear equations 

```terminal 
sunil-kumar@DESKTOP-GBKN3LB:~$ nc verbal-sleep.picoctf.net 53407

*******************************************
***             Part 1                  ***
***    The Mystery of the CLONED RAT    ***
*******************************************

The super evil Dr. Lacktoes Inn Tolerant told me he kidnapped my best friend, Squeexy, and replaced him with an evil clone! You look JUST LIKE SQUEEXY, but I'm not sure if you're him or THE CLONE. I've devised a plan to find out if YOU'RE the REAL SQUEEXY! If you're Squeexy, I'll give you the key to the cloning room so you can maul the imposter...

Here's my secret cheese -- if you're Squeexy, you'll be able to guess it:  HIJJMOBE
Hint: The cheeses are top secret and limited edition, so they might look different from cheeses you're used to!
Commands: (g)uess my cheese or (e)ncrypt a cheese
What would you like to do?
```
The hint about "linear equations" pointed towards an affine cipher, which uses the form:

Encryption: `y=(mx+b)mod26`

Decryption: `x=((y−b)⋅m−1)mod26`

where:

x represents the numerical value of a letter in the plaintext (A=0, B=1, ..., Z=25).

y represents the numerical value of the corresponding letter in the ciphertext.

m and b are the keys of the cipher. m−1 is the modular multiplicative inverse of m modulo 26.
To find the keys m (which you denoted as 'a') and b, I used the plaintext-ciphertext pairs from "feta" and "RKLI":

f (5) → R (17)
e (4) → K (10)
t (19) → L (11)
a (0) → I (8)
Substituting the first pair into the encryption equation:
17=(5m+b)mod26

Substituting the second pair:
10=(4m+b)mod26

Subtracting the second equation from the first:
17−10=(5m+b)−(4m+b)mod26

7=m mod26

So, m=7.

Now, substituting the value of m back into the second equation:
10=(4⋅7+b)mod26  => 10 =(28+b)mod26  => 10 =(2+b)mod26

b=10−2mod26

b=8mod26

Thus, the encryption key is m=7 and b=8.

To decrypt the secret cheese "HIJJMOBE," I needed the decryption equation. First, I needed to find the modular multiplicative inverse of m=7 modulo 26. This is a number m 
−1
  such that (m⋅m 
−1
 )mod26=1. By testing values or using the Extended Euclidean Algorithm, I found that 7 
−1
 mod26=15 (since 7⋅15=105=4⋅26+1).

Now, the decryption equation becomes:
x=((y−8)⋅15)mod26

Applying this to "HIJJMOBE":

H (7) → ((7−8)⋅15)mod26=(−1⋅15)mod26=−15mod26=11 (L)

I (8) → ((8−8)⋅15)mod26=(0⋅15)mod26=0 (A)

J (9) → ((9−8)⋅15)mod26=(1⋅15)mod26=15 (P)

J (9) → ((9−8)⋅15)mod26=(1⋅15)mod26=15 (P)

M (12) → ((12−8)⋅15)mod26=(4⋅15)mod26=60mod26=8 (I)

O (14) → ((14−8)⋅15)mod26=(6⋅15)mod26=90mod26=12 (M)

B (1) → ((1−8)⋅15)mod26=(−7⋅15)mod26=−105mod26=23 (Z)

E (4) → ((4−8)⋅15)mod26=(−4⋅15)mod26=−60mod26=18 (S)

The decrypted cheese is `LAPPIMZS`. 

Finally, I selected 'g' to guess the cheese and entered "LAPPIMZS" And this got me the flag .

## Final Solution :

```terminal
sunil-kumar@DESKTOP-GBKN3LB:~$ nc verbal-sleep.picoctf.net 53407

*******************************************
***             Part 1                  ***
***    The Mystery of the CLONED RAT    ***
*******************************************

The super evil Dr. Lacktoes Inn Tolerant told me he kidnapped my best friend, Squeexy, and replaced him with an evil clone! You look JUST LIKE SQUEEXY, but I'm not sure if you're him or THE CLONE. I've devised a plan to find out if YOU'RE the REAL SQUEEXY! If you're Squeexy, I'll give you the key to the cloning room so you can maul the imposter...

Here's my secret cheese -- if you're Squeexy, you'll be able to guess it:  HIJJMOBE
Hint: The cheeses are top secret and limited edition, so they might look different from cheeses you're used to!
Commands: (g)uess my cheese or (e)ncrypt a cheese
What would you like to do?
e

What cheese would you like to encrypt? feta
Here's your encrypted cheese:  RKLI
Not sure why you want it though...*squeak* - oh well!

I don't wanna talk to you too much if you're some suspicious character and not my BFF Squeexy!
You have 2 more chances to prove yourself to me!

Commands: (g)uess my cheese or (e)ncrypt a cheese
What would you like to do?
e

What cheese would you like to encrypt? feta
Here's your encrypted cheese:  RKLI
Not sure why you want it though...*squeak* - oh well!

I don't wanna talk to you too much if you're some suspicious character and not my BFF Squeexy!
You have 1 more chances to prove yourself to me!

Commands: (g)uess my cheese or (e)ncrypt a cheese
What would you like to do?
g


   _   _
  (q\_/p)
   /. .\.-.....-.     ___,
  =\_t_/=     /  `\  (
    )\ ))__ __\   |___)
   (/-(/`  `nn---'

SQUEAK SQUEAK SQUEAK

         _   _
        (q\_/p)
         /. .\
  ,__   =\_t_/=
     )   /   \
    (   ((   ))
     \  /\) (/\
      `-\  Y  /
         nn^nn


Is that you, Squeexy? Are you ready to GUESS...MY...CHEEEEEEESE?
Remember, this is my encrypted cheese:  HIJJMOBE
So...what's my cheese?
LAPPIMZS

         _   _
        (q\_/p)
         /. .\         __
  ,__   =\_t_/=      .'o O'-.
     )   /   \      / O o_.-`|
    (   ((   ))    /O_.-'  O |
     \  /\) (/\    | o   o  o|
      `-\  Y  /    |o   o O.-`
         nn^nn     | O _.-'
                   '--`

munch...

         _   _
        (q\_/p)
         /. .\         __
  ,__   =\_t_/=      .'o O'-.
     )   /   \      / O o_.-`|
    (   ((   ))      ).-'  O |
     \  /\) (/\      )   o  o|
      `-\  Y  /    |o   o O.-`
         nn^nn     | O _.-'
                   '--`

munch...

         _   _
        (q\_/p)
         /. .\         __
  ,__   =\_t_/=      .'o O'-.
     )   /   \      / O o_.-`|
    (   ((   ))        )'  O |
     \  /\) (/\          )  o|
      `-\  Y  /         ) O.-`
         nn^nn        ) _.-'
                   '--`

MUNCH.............

YUM! MMMMmmmmMMMMmmmMMM!!! Yes...yesssss! That's my cheese!
Here's the password to the cloning room:  picoCTF{ChEeSy696d4adc}
```
**Flag:** ` picoCTF{ChEeSy696d4adc}`

## What I Learnt:

1. **Understanding Modular Arithmetic (How Mod Works):** I gained a deeper understanding of how the modulo operation works, especially in the context of cryptography, where it ensures results stay within a specific range (in this case, 0-25 for the alphabet).

2. **Affine Cipher Encryption and Decryption:** This challenge provided hands-on experience with the affine cipher, a type of monoalphabetic substitution cipher. I learned how to:
Use the encryption equation y=(mx+b)mod26.
Determine the keys (m and b) by analyzing plaintext-ciphertext pairs.
Calculate the modular multiplicative inverse of m to use in the decryption equation x=((y−b)⋅m−1)mod26.


This challenge was a fantastic introduction to basic cryptography and the power of linear equations in creating ciphers!