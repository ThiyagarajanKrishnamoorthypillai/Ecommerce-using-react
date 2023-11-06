import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import {CookiesProvider} from 'react-cookie';

import reportWebVitals from './reportWebVitals';
import { ShopperIndexComp } from './component/shopper.index.component.js/shopper.index.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <ShopperIndexComp/>
    </CookiesProvider>
  </React.StrictMode>
);


reportWebVitals();
