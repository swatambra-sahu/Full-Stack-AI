let a = 5;
let b = "ramesh";
let c = true;
let d = [4,5,2];
let e = {name: "Suresh", age: 25}
let f = 4.2;
let g = function(arg){console.log(arg)}


function doWork(input){
    console.log(input);
    console.log(typeof(input));
}


// js inbuilt class
class Array{
    num = []
    forEach(inputFunc){
        for(let i=0;i<this.num.length;i++){
            inputFunc(num[i]);
        }
    }
}


