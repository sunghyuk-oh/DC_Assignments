import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import BaseLayout from './components/BaseLayout'
import AddBook from './components/AddBook'
import DeleteBook from './components/DeleteBook'
import reducer from './stores/reducer'
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DisplayCart from './components/DisplayCart';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route component={App} exact path='/' />
            <Route component={AddBook} path='/add-book' />
            <Route component={DeleteBook} path='/delete-book' />
            <Route component={DisplayCart} pat='/view-cart' />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
