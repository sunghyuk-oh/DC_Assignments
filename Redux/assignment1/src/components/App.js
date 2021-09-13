import './App.css';
import { connect } from 'react-redux'

function App(props) {
  
  const handleIncrement = () => {
    props.incrementCtr()
  }
  
  const handleDecrement = () => {  
    props.decrementCtr()
  }

  return (
    <div className="App">
      <h1>{props.ctr}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { ctr: state.counter }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCtr: () => dispatch( {type: 'INCREMENT'} ),
    decrementCtr: () => dispatch( {type: 'DECREMENT'} )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
