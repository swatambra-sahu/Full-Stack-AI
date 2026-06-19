const fs = require("fs");

let path = "./data";

let student = {
    name: "Ramesh",
    age: 21,
    contant: {
        phones: [787878,989877], 
        emails: "ram@shyam.com", 
        address: {
            city: "Pune",
            pin: 343434
        }
    }
}
fs.writeFileSync(path, JSON.stringify(student), 'utf8')

console.log("file written is complete")