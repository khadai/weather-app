import React from 'react';
import axios from 'axios';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from "./components/app";
import reducer from "./store/reducer";

const store = createStore(reducer);

const el = (
    <Provider store={store}>
        <App></App>
    </Provider>
);

ReactDOM.render(el,
    document.getElementById('root'));