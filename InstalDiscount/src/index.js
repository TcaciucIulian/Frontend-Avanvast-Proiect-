import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Route, Switch} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Home } from "./pages/home/home";
import {Login} from "./pages/login/login";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import configureStore, {history} from "./configureStore";
import { ProductsPage } from './pages/products/productsPage';
import { Cart } from './pages/shoppingCart/cart';
import { Contact } from './pages/contact/contact';
import { Reviews } from './pages/reviews/reviews';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/produse" component={ProductsPage}/>
            <Route exact path="/cosulmeu" component={Cart}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/recenzii" component={Reviews}/>
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
