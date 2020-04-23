import React from 'react';
import { Header, ListsController } from './components';
import styles from './App.module.scss'
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className={styles.app}>
      <Header title="Multi List" />
      <ListsController />
    </div>
  </Provider>
);

export default App;
