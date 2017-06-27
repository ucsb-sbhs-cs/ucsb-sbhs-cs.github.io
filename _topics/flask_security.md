---
topic: "Flask: Security"
desc: "Securing user sessions on Flask"
---

The following video demonstrates that the fact that user sessions in Flask are cryptographically <em>signed</em> (to protect against 
is NOT the same as saying that they are crytographically <em>encoded</em>.    

In fact, the contents of a Flask session are actually stored in plaintext, in Base-64 encoding, or if they are long, in Base-64 encoding that is then
compresed with gzip compression.     
This article by the video's creator explains more:
* [How Secure is the Flask User Session](https://blog.miguelgrinberg.com/post/how-secure-is-the-flask-user-session)

<iframe width="560" height="315" src="https://www.youtube.com/embed/mhcnBTDLxCI" frameborder="0" allowfullscreen></iframe>

