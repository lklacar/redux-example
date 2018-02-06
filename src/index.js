import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import Layout from "./components/Layout"
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor, store} from "./store";

const app = document.getElementById('root');

console.log(store);
ReactDOM.render(<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Layout/>
    </PersistGate>
</Provider>, app);

registerServiceWorker();
