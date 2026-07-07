import express from "express";
const router = express.Router();

import {showHome,showAddStudentForm,addStudent,showAllReportCards}
    from "./../controllers/studentController.js"

router.get("/", showHome)
router.get("/students", showAllReportCards)
router.get("/students/add", showAddStudentForm)
router.post("/students/add", addStudent)



export default router;