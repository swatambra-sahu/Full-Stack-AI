import { useContext } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

// ThemeProvider
// useTheme

function MyComponent() {
    const {darkMode, toggleTheme} = useTheme();

    return (
        <div>
            <h2>Welcome User</h2>
            <p>Current Theme: {darkMode?"Dark":"Light"}</p>
            <button onClick={toggleTheme}>
                Switch to {!darkMode?"Dark":"Light"}
            </button>
        </div>
    );
}

function Demo() {
    const {darkMode, toggleTheme} = useTheme();

    return (
        <div>
            <h2>Welcome Demo</h2>
            <p className={!darkMode?'light':'dark'}>Current Theme: {darkMode?"Dark":"Light"}</p>
        </div>
    );
}

function App(){

    return (
        <ThemeProvider>
            <MyComponent/>
            <hr/>
            <Demo/>
        </ThemeProvider>
    );
}

export default App;