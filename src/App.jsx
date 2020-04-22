import React from 'react';
import Header from './components/Header';
import ColumnsContainer from './components/ColumnsContainer';
import styles from './App.module.scss'

const App = () => (
  <div className={styles.app}>
    <Header title="Multi List" />
    <ColumnsContainer />
  </div>
);

export default App;
