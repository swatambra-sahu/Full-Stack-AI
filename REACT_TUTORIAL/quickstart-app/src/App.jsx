import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ProfuctDetails from "./pages/ProductDetail";

import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Link, Route, Routes } from "react-router-dom";

function App(){

    return (
        <div>

            <header>
                <a href="/">Home</a> |
                <a href="/cart">Cart</a>
                <hr/>
                <Link to="/">QuickStart</Link> | 
                <Link to="/cart">Cart</Link>
            </header>


        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<ProfuctDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
            {/* <Home/>
            <Cart/>
            <Checkout/> */}

        </div>
    )
}

export default App;