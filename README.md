Node LocalBitcoins
===========

NodeJS Client Library for the Paxful API

Example Usage:

`npm i paxful-nodejs`

```javascript
    const Paxful = require("paxful-nodejs");
    const key = "YOUR_KEY_GOES_HERE";
    const secret = "YOUR_SECRET_GOES_HERE";
    const payload = "&username=pardeep889"; // empty or null when not required :)
    const method = "POST";
    const data = paxful.hit(key,secret,payload,method);
    let my = await data.then(resp => resp);
    console.log(my); // LOG THE USER DATA

```

To-Do: 
- I will imporove further ASAP :) 

Credit:

Forked from https://github.com/pardeep889/

Edited By: Pardeep889@hotmail.com
