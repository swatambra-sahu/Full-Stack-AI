const fs = require("fs")

let path = "./../demo.js"

// blocking 
let data = fs.readFileSync(path)

// console.log(data)
// console.log(data.toString())

console.log("ByeBye")