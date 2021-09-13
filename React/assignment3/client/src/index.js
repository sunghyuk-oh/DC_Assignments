import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import MainLayout from './components/MainLayout';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <MainLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/add-book" component={AddBook} />
          <Route path="/delete-book" component={DeleteBook} />
        </Switch>
      </MainLayout>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
