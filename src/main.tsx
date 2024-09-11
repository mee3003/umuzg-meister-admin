import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App';
import AppLoader from './AppLoader';
import { store } from './store';

/* eslint no-extend-native: 0 */
Date.prototype.addDays = function (days: number) {
  this.setDate(this.getDate() + days);
  return this;
};

Array.prototype.from = function (index: number) {
  const newArray = [...this];
  newArray.splice(0, index);
  return newArray;
};

export const OPTIONS = {
  // included
  BASE_PRICE: 'basePrice',
  BASE_LFM: 'baseLfm',
  BASE_KM: 'baseKm',
  BASE_QM: 'baseQm',
  // extra charge in %
  CHARGE_LFM: 'chargeLfm',
  CHARGE_ETAGE04: 'chargeEtageNoLIft',
  CHARGE_ETAGELIFT: 'chargeEtageWithLift',
  // other
  LKW_PRICE: 'lkwPrice',
  KM_PRICE: 'kmPrice',
  QM_PRICE: 'qmPrice',
  HVZ_PRICE: 'hvzPrice',
  M100_PRICE: 'mHundredPrice',
  M150_PRICE: 'mHundredFiftyPrice',
  LOFT_PRICE: 'loftPrice',
  BULKY_PRICE: 'bulkyPrice',
  //disposal
  DISPOSAL_CBM: 'disposalCbmPrice',
  DISPOSAL_PAUSCHALE: 'disposalBasicPrice',
  DISPOSAL_MAX_CBM: 'disposalMaxCbm',

  BOX_CBM: 'boxCbm',
  KLEIDERBOX_CBM: 'kleiderboxCbm',
  EMAIL_FROM_NAME: 'emailFromName',
  COMPANY_EMAIL: 'companyEmail',

  A_10_METER: 'ameter',
  A_KARTON_PACK: 'aBoxPack',
  A_MONTAGE_BET: 'aBettDeMon',
  A_KITCHEN_MONTAGE: 'akitmon',
  A_WARDROBE_MONTAGE: 'awardmon',
  A_ETAGE: 'aetage',
  A_CBM: 'acbm',

  R_NUMBER: 'rNumber',
  G_NUMBER: 'gNumber',

  GAPIKEY: 'gapikey',
  CLIENT_ID: 'clientId',
  JF_API_KEY: 'jfApiKey',
  ORIGIN: 'origin',
  POOL_ID: 'poolId',
  DATA_PRIVACY_URL: 'dataPrivacyUrl',
  SUCCESS_URL: 'successUrl',
  BOX_CALCULATOR_URL: 'boxCalculatorUrl',
} as const;

ReactDOM.createRoot(document.getElementById('um-configurator-admin') as HTMLElement).render(
  <Provider store={store}>
    <HashRouter>
      <AppLoader>
        <App />
      </AppLoader>
    </HashRouter>
  </Provider>,
);
