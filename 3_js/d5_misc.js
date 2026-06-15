// array
let max_marks = 100;
let marks = [77, 82, 97, 93, 100];

/*
find max, min and percentage
*/
let max = marks[0];
let min = marks[0];
let sum = 0;


for(let i=0;i<marks.length;i++){
    console.log(i + " -> "+marks[i]);
    if(marks[i]>max){
        max = marks[i];
    }

    if(marks[i]<min){
        min = marks[i];
    }

    sum = sum + marks[i];
}

let totalMaxMarks = max_marks * marks.length;
let percentage = (sum/totalMaxMarks)*100; 

console.log(`Min: ${min}, Max: ${max}, Sum: ${sum}, Percentage: ${percentage}`)


marks.forEach(function(mark, i){
    console.log(i + " -> " +mark)
})

// =============

// c++ or java class
// class Person{
//     int age;
//     String name;

//     Person(){}
//     Person(int a){
//         this.age = a;
//         this.address
//     }
// }


class Person{
    constructor(n,a){
        this.name = n;
        this.age = a;
    }
}


let ram = new Person("Ram", 23);

console.log(ram);
console.log(ram.address); 
console.log(ram.name); 
ram.name = "Ramesh"
console.log(ram); 
ram.address = "PUne"
console.log(ram); 



// ============== Function

// function with name
function add(a, b){}

// function without name - anonymous function
let add = function(a, b){}

// arrow function
let add = (a, b)=>{}
