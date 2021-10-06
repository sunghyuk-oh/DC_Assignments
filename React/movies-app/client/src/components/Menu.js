import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'

function Main(props) {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            { !props.isAuth ? <NavLink to="/login">Login</NavLink> : null }
            { props.isAuth ? <NavLink to="/logout">Logout</NavLink> : null}
            { props.isAuth ? <NavLink to="/cart">Cart</NavLink> : null}
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth
    }
}

export default connect(mapStateToProps)(Main)

