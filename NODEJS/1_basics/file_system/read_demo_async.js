const fs = require("fs")

let path = "./../demo.js"

// non - blocking 
fs.readFile(path, function(data){
    console.log(data)
})

console.log("ByeBye")