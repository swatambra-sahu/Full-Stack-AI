// import {addStudent, getAllStudents, getFindById} from "./../models/student";
import StudentModel from "./../models/student.js";

export const showHome = (req, res)=>{
    res.render("index");
}

export const showAddStudentForm = (req, res)=>{
    res.render("addStudent");
}

export const addStudent = (req, res)=>{
    const {name, maths, science, english} = req.body;

    if(!name || name.trim()===""){
        // name is invalid - "", null, undefined
        res.render("addStudent", {message: "Please enter a valid name."});
    } else {
        // maths = parseInt(maths);
        // science = +science; 
        // english = +english;

        let std = StudentModel.addStudent(name.trim(), +maths, +science, +english)
        console.log("Student saved in array: "+std);

        res.redirect("/students")
    }
}

export const showAllReportCards = (req, res)=>{
    const students = StudentModel.getAllStudents();
    res.render("reportCards", {students})
}


