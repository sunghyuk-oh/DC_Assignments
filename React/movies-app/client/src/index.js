import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './stores/reducer';
import Main from './components/Main'
import Login from './components/Login'
import Logout from './components/Logout';
import Cart from './components/Cart'
import requireAuth from './components/requireAuth';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const token = localStorage.getItem('')
if (token) {
  store.dispatch({type: 'ON_LOGIN'})
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Main>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/logout' component={requireAuth(Logout)}/>
            <Route exact path='/cart' component={requireAuth(Cart)}/>
          </Switch>
        </Main>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
