import React from 'react';
import "./components/css/App.css";
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import { Provider } from "react-redux";
import { Store } from "./components/store/store";



 
ReactDOM.render( 
    <Provider store={ Store }>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>, document.getElementById('root')
);  