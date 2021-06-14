import React from 'react';
import '@shopify/polaris/dist/styles.css';
import './App.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page} from '@shopify/polaris';
import OrdersTable from './features/orders/OrdersTable'

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Triple Whale">
        <OrdersTable/>
      </Page>
    </AppProvider>
  );
}

export default App;
