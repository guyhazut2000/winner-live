// css 
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// components
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>,
);

