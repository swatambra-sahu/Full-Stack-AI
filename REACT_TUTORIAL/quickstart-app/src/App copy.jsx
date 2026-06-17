import { useTheme } from "./context/ThemeContext";

function App(){
    const {darkMode, toggleTheme} = useTheme();

    return (
        <header>
            <a href="contact">Contact</a>
            <a href="contact">$ {darkMode} $</a>
            <br/>
            <button onClick={toggleTheme}>
                {darkMode ? 'Light Mode': 'Dark Mode'}
            </button>
        </header>
    )
}

export default App;