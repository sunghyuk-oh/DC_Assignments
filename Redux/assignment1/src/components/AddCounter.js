import { connect } from 'react-redux'
import { useState } from 'react'

function AddCounter(props) {
    const [count, setCount] = useState('')

    const handleOnChange = (e) => {
        const cnt = e.target.value
        setCount(cnt)
    }

    const handleAddCtr = () => {
        props.onAdd(parseInt(count))
    }

    const handleSubtractCtr = () => {
        props.onSubtract(parseInt(count))
    }

    return (
        <div className="App">
            <h1>{props.counter}</h1>
            <input input="text" value={count} onChange={handleOnChange} />
            <div className="buttonDiv">
                <button onClick={handleAddCtr}>Add</button>
                <button onClick={handleSubtractCtr}>Subtract</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { counter: state.counter }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (count) => dispatch({ type: 'ADD', payload: count }),
        onSubtract: (count) => dispatch({ type: 'SUBTRACT', payload: count })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCounter)