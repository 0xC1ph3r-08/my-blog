# Read My Cert

### Challenge 

![challengeimage](../../../../static/img/readmycertt.PNG)

# Hint 
- Download the certificate signing request and try to read it.

### Here's a breakdown of a potential thought process and solution approach:

1. Initial Reconnaissance: What Am I Looking At?

    The first thing you'd notice are the distinct `-----BEGIN CERTIFICATE REQUEST-----` and `-----END CERTIFICATE REQUEST-----` lines. This immediately tells you that you're dealing with a `PEM (Privacy-Enhanced Mail)` encoded Certificate Signing Request.
    - Thought process here: "Okay, this isn't just random gibberish. It's a structured piece of data. My goal is to decode it and see what's inside."

2. The Right Tool for the Job: `OpenSSL`

    For anything related to certificates, keys, and CSRs, `OpenSSL` is your best friend. It's the standard toolkit for these operations.

    - My thought process here: "How do I decode a CSR? I remember openssl being the go-to tool for certificate stuff. I need to find the specific command to read a CSR."

    - Action: A quick search (e.g., "openssl read csr," "decode csr openssl") would quickly lead you to the command: `openssl req -in [your_csr_file].csr -noout -text`.

3.  Execution and Discovery

    You'd save the provided CSR text into a file (let's say challenge.csr) and then run the openssl command.

![readmycertimg2](../../../../static/img/readmycertimg2.PNG)

4. The Flag 

    Running that commang got me the flag `picoCTF{read_mycert_41d1c74c}`

### Flag

- `picoCTF{read_mycert_41d1c74c}`

### What i learnt 

- The CSR and how it works 

    1. A Certificate Signing Request (CSR) is an encoded text block that you send to a Certificate Authority (CA)   to get a digital certificate. It contains your public key and identifying information (like your domain name). It's essentially the application for your website's digital ID.

    2. You create a CSR (with your public key) on your server and send it to a Certificate Authority (CA).

        The CA verifies your identity using the CSR and then issues a signed digital certificate that you install back on your server.