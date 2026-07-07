let students = [];

let nextId = 1;

const addStudent = (name, maths, science, english)=>{
    const total = maths + science + english;
    const average = (total/3).toFixed(1);

    let grade;
    if(average>=90){
        grade = "A+";
    } else if(average>=75){
        grade = "A";
    } else if(average>=60){
        grade = "B";
    } else if(average>=50){
        grade = "C";
    } else {
        grade = "F";
    } 

    const student = {
        id: nextId++,
        name, maths, science, english,
        total, average,grade
    }

    students.push(student);
    return student;
}

const getAllStudents = ()=>{
    return [...students];
}

const getFindById = (id)=>{
    students.find((std)=>{ return std.id == parseInt(id)})
}

export default {addStudent, getAllStudents, getFindById}
