const fetch = require('node-fetch');

function Paxful(){
    var self = this;
    function hit(key, secret, payload, method){
        return new Promise((resolve, reject) => {
            fetch("https://paxful.com/api/user/info", 
            {"credentials":"omit","headers":
            {"accept":"application/json","accept-language":"en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7",
            "cache-control":"no-cache","content-type":"text/plain","pragma":"no-cache",
            "sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},
            "referrerPolicy":"no-referrer-when-downgrade",
            "body":"apikey="+key+`&nonce=1574162642572${payload}&apiseal=${secret}`,
            "method": method,"mode":"cors"
            })
            .then(res => res.json()) // expecting a json response
            .then(data => {
                resolve(data);
            }).catch(err => reject(err));
        });
    }
    self.hit = hit;
}

module.exports = Paxful;