import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store,persistor } from './Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './Utils/Stripe/stripe.utils';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App/>
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
,root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
