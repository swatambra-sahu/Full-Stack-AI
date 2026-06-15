function mul(a, b){
    return a * b;
}

function add(a, b){
    return a + b;
}

add(5, 7)

function squareAndAdd(a, b){
    return (a*a) + (b*b);
}

let ramesh_marks = [68, 56, 73]
let suresh_marks = [83, 76, 63]

function calc(marks, func){
    let sum = 0;
    for(let i=0;i<marks.length;i++){
        sum = func(sum, marks[i]);
    }
    return sum;
}

calc(ramesh_marks, add);
calc(suresh_marks, add);
calc(ramesh_marks, squareAndAdd);
calc(suresh_marks, squareAndAdd);


// ================

let ramesh_marks = [68, 56, 73]
let suresh_marks = [83, 76, 63]

function min(a, b){
    return a>b?b:a;
}
function max(a, b){
    return a<b?b:a;
}

function calc(arr, task){
    let res = arr[0];
    for(let i=0;i<arr.length;i++){
        res = task(res, arr[i]);
    }
    return res;
}

console.log(calc(ramesh_marks, min));



function myFunc(num){
    console.log(num*2)
}
function ourFunc(num){
    console.log(num+2)
}

ramesh_marks.forEach(ourFunc)