import React from 'react';
import classnames from 'classnames';
import styles from './App.module.scss';

const App = () => (
  <div className="App">
    <header className={classnames(styles.header, styles.flexCenter)}>
      Kremer interview
    </header>
  </div>
);

export default App;
