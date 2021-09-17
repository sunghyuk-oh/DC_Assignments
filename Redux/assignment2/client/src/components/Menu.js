import { connect } from 'react-redux'
import { NavLink } from "react-router-dom"
import './css/Menu.css'

export function Menu(props) {

    return (
        <nav id="navlink">
            <div id="left-menu">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/add-book">Add Book</NavLink></li>
                </ul>
            </div>
            <div id="right-menu">
                <ul>
                    <li><NavLink to="/view-cart">Cart ({props.cartItems.length})</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(Menu)