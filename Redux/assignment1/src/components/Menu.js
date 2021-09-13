import { NavLink } from "react-router-dom"
import './Menu.css'

function Menu() {
    return (
        <ul>
            <li><NavLink to="/">Increment/Decrement</NavLink></li>
            <li><NavLink to="/add-counter">Add/Subtract</NavLink></li>
        </ul>
    )
}

export default Menu