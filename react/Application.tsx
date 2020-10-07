import React from 'react';
import { ConnectedRouter, connectRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks';
import rootSaga from './sagas';
import configureStore from './store';
import { createBrowserHistory } from 'history';
import Home from './containers/Home';

const history = createBrowserHistory();
const router = connectRouter(history);
const sagas = createSagaMiddleware();

function Application ({ state = {} }) {
    const store = configureStore(rootReducer(router), state, history, sagas)
    sagas.run(rootSaga);

    return (<Provider store={store}>
        <ConnectedRouter history={history}>
            <Home />
        </ConnectedRouter>
    </Provider>

    )
}

export default Application;