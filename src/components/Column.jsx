import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Column.module.scss';


const Column = ({ name, items, addItem }) => (
  <div className={styles.column}>
    <div className={styles.title}>{name}</div>
    {items && items.map(item => (
      <div key={item} className={styles.item}>{item}</div>
    ))}
    
    <div onClick={addItem}>+ Add a Card</div>
  </div>
);

export default Column;
