import React from "react";
import ReactDOM from 'react-dom';
import {AppContainer} from "react-hot-loader";
import App from "components/App";
import { Provider } from 'react-redux';
import APlayApp from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(APlayApp, applyMiddleware(thunk));
const rootEl = document.getElementById("root");

const renderComponent = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        rootEl
    );
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/App", () => {
    renderComponent(App);
  });
}
