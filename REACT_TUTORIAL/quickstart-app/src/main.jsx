import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

console.log("App started")

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <h1>My App</h1> */}
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </StrictMode>
)