import React from 'react';
import styles from './Column.module.scss';


const Column = ({ name, items, addItem, moveRight, moveLeft }) => (
  <div className={styles.column}>
    <div className={styles.title}>{name}</div>
    {items && items.map((item, idx) => (
      <div key={item+idx} className={styles.item}>
        { moveLeft && <span onClick={() => moveLeft(idx)}>&lt;</span> }
        <span className={styles.itemName}>{item}</span>
        { moveRight && <span onClick={() => moveRight(idx)}>&gt;</span> }
      </div>
    ))}
    
    <div onClick={addItem}>+ Add a Card</div>
  </div>
);

export default Column;
