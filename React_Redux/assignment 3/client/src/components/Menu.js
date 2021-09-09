import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-book">Add Book</NavLink>
                    </li>
                    <li>
                        <NavLink to="/delete-book">Delete Book</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu