import './index.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './App';
import { ScrollToHash } from './components/ScrollToHash';
import { UiLoader } from './components/ui/UiLoader';
import { persistor, store } from './redux/store';

const googleClientId =
  '111977861414-5ko2ir33hdol90rgnj62uqe4c1vigdkk.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<UiLoader />} persistor={persistor}>
        <GoogleOAuthProvider clientId={googleClientId}>
          <BrowserRouter>
            <ScrollToHash />
            <App />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
