const fs = require("fs")

let path = "./data";

// blocking 
let data = fs.readFileSync(path, 'utf8')

let obj = JSON.parse(data)
console.log(obj.name)

console.log("ByeBye")