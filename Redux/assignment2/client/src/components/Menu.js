import { NavLink } from "react-router-dom"
import './css/Menu.css'

export function Menu() {
    return (
        <nav id="navlink">
            <div id="left-menu">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/add-book">Add Book</NavLink></li>
                    <li><NavLink to="/delete-book">Delete Book</NavLink></li>
                </ul>
            </div>
            <div id="right-menu">
                <ul>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu