import React from 'react';
import '@shopify/polaris/dist/styles.css';
import './App.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page} from '@shopify/polaris';
import Table from './features/table/Table'

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Triple Whale">
        <Table/>
      </Page>
    </AppProvider>
  );
}

export default App;
