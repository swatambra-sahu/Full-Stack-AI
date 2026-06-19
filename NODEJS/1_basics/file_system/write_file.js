const fs = require("fs");

let path = "./abc.txt";

fs.writeFileSync(path, "This is awesome day.", 'utf8')

console.log("file written is complete")