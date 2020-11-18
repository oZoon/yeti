import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './core/reducers';
import Records from './lib/records';
import App from './core/app';
import { VERSION } from './lib/constants';

const store = createStore(reducers, applyMiddleware(thunk));

const update = () => {
    const records = new Records();
    records.setRecord(`yeti${VERSION}`, store.getState());
}
store.subscribe(update);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
