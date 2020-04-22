import React from 'react';
import classnames from 'classnames';
import styles from './List.module.scss';

const List = ({ name, color, items, addItem, moveRight, moveLeft }) => (
  <div className={styles.list}>
    <div className={styles.title} style={{backgroundColor: color}}>{name}</div>
    {items && items.map((item, idx) => (
      // TODO fix the key here
      <div key={item+idx} className={styles.item}>
        { moveLeft && <span onClick={() => moveLeft(idx)} className={styles.clickable}>&lt;</span> }
        <span className={styles.itemName}>{item}</span>
        { moveRight && <span onClick={() => moveRight(idx)} className={styles.clickable}>&gt;</span> }
      </div>
    ))}
    
    <div onClick={addItem} className={styles.clickable}>+ Add a Card</div>
  </div>
);

export default List;
