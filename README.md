Node Paxful API Reference
=============================================================================

NodeJS Client Library for the Paxful API

Example Usage:

`npm i paxful-nodejs`

```javascript
    const Paxful = require("paxful-nodejs");

    let paxful = new Paxful();
    const key = "YOUR_KEY_GOES_HERE";
    const secret = "YOUR_SECRET_GOES_HERE";
    const payload = "username=pardeep889"; // empty or null when not required :)
    const apiEndPoint = "user/info"; // this will be your API end Point
    const method = "POST";

    async function callPaxfulApi(){
        const data = await paxful.hit(apiEndPoint, key,secret,payload,method);
        console.log(data)
    }
 callPaxfulApi();


```
=============================================================================

To-Do: 
- I will imporove further ASAP :) 

Requirements: crpyto-js and node-fetch must be installed

Forked from https://github.com/pardeep889/

Created By: Pardeep889@hotmail.com
