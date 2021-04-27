//const argv = require('argv');
//const AES = require('crypto-js');
//import UTF8 from "crypto-js/enc-utf8";

const { argv } = require("nexe");
const AES = require("crypto-js/aes");
const UTF8 = require("crypto-js/enc-utf8");
//{ AES, UTF8 }

let key = argv["k"];
let cypher = argv["s"];

if(!key) {
    console.log("no key supplied, please provide a -k option on the command line");
}
else {
    key=key.trim();
    if(!cypher) {
        cypher =  "B00m1Fl0w!!";
        console.log("No cypher supplied, default used, please provide a -s option on the command line to override.")
    }
    else {
        cypher=cypher.trim();
    }
    let result = AES.encrypt(key,cypher).toString();
    console.log("The key '" + key + "' and cypher '" + cypher + "' where used.");
    console.log("Your AES encrypted value is:  '" + result + "'");

    console.log("Your AES decrypted value is:  '" + AES.decrypt(result,cypher).toString(UTF8) + "'");


}
