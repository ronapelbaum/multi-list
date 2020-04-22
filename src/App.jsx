import React from 'react';
import { Header, ListsController } from './components';
import styles from './App.module.scss'

const App = () => (
  <div className={styles.app}>
    <Header title="Multi List" />
    <ListsController />
  </div>
);

export default App;
