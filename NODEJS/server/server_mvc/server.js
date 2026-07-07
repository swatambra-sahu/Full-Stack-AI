import express from "express";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/", studentRoutes)

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("App is running at "+PORT);
})