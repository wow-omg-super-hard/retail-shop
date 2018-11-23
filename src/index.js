import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import AppRouter from './router/AppRouter';

ReactDOM.render(
    <Provider store={ appStore }>
        <AppRouter />
    </Provider>,
    document.querySelector('#root')
);