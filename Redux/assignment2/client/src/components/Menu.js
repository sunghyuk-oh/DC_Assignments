import { connect } from 'react-redux'
import { NavLink } from "react-router-dom"
import './css/Menu.css'
import * as actionCreator from '../stores/creators/actionCreate'

export function Menu(props) {
    props.onAddCartItems()

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

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCartItems: () => dispatch(actionCreator.fetchCartItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)