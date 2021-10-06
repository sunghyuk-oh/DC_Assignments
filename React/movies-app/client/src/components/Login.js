import { useState } from 'react'
import { connect} from 'react-redux'

function Login(props) {
    // initializing local states
    const [userRegister, setUserRegister] = useState({})
    const [userLogin, setUserLogin] = useState({})
    const [registerSuccess, setRegisterSuccess] = useState({success: false, message: ''})
    const [registerFail, setRegisterFail] = useState({fail: false, message: ''})

    // Handling input from the user
    const handleRegisterInput = (e) => {
        setUserRegister({
            ...userRegister,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginInput = (e) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    // Handling Register
    const handleRegister = () => {
        fetch('http://localhost:8080/register', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userRegister)
        })
        .then(response => response.json())
        .then(result => {
            if(result) {
                setRegisterSuccess({success: true, message: result.message})
                props.history.push('/login')
            } else {
                setRegisterFail({fail: true, message: result.message})
            }
        })
        .catch(e => console.log(e))
    }
    
    // Handling Login
    const handleLogin = () => {
        fetch('http://localhost:8080/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userLogin)
        })
        .then(response => response.json())
        .then(result => {
            if (result) {
                console.log(result)
                localStorage.setItem('userToken', result.token)
                props.onLogin()
                props.history.push('/')
            } else {
                console.log('Login Failed')
            }
        })
        .catch(e => console.log(e))
    }


    return (
        <section>
            <div className="login">
                <input type="text" onChange={handleLoginInput}  name="username" placeholder="Username" required />
                <input type="text" onChange={handleLoginInput}  name="password" placeholder="Password" required />
                <button onClick={handleLogin}>Login</button>
            </div>
            <div className="register">
                {registerFail.fail ? <p>{registerFail.message}</p> : null}
                <input type="text" onChange={handleRegisterInput} name="firstName" placeholder="First Name" required />
                <input type="text" onChange={handleRegisterInput} name="lastName" placeholder="Last Name" required />
                <input type="text" onChange={handleRegisterInput} name="username" placeholder="Username" required />
                <input type="text" onChange={handleRegisterInput} name="password" placeholder="Password" required />
                <button onClick={handleRegister}>Register</button>
                {registerSuccess.success ? <p>{registerSuccess.message}</p> : null}
            </div>    
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch({type: 'ON_LOGIN'})
    }
}

export default connect(null, mapDispatchToProps)(Login)