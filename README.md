Node Paxful API Refernce
===========

NodeJS Client Library for the Paxful API

Example Usage:

`npm i paxful-nodejs`

```javascript
    const Paxful = require("paxful-nodejs");

    let paxful = new Paxful();
    const key = "YOUR_KEY_GOES_HERE";
    const secret = "YOUR_SECRET_GOES_HERE";
    const payload = "&username=pardeep889"; // empty or null when not required :)
    const method = "POST";


    async function callPaxfulApi(){
    const data = paxful.hit(key,secret,payload,method);
    let my = await data.then(resp => resp);
    console.log(my)
    }
    callPaxfulApi();


```

To-Do: 
- I will imporove further ASAP :) 

Credit:

Forked from https://github.com/pardeep889/

Edited By: Pardeep889@hotmail.com
