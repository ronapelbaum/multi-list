import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import styles from './List.module.scss';

const List = ({ name, color, items, addItem, moveRight, moveLeft }) => (
  <div className={styles.list}>
    <div className={styles.title} style={{backgroundColor: color}}>{name}</div>
    {items && items.map((item, idx) => (
      // TODO fix the key here
      <div key={item + idx} className={styles.item}>
        {moveLeft &&
          <IconButton onClick={() => moveLeft(idx)} size="small">
            <KeyboardArrowLeft fontSize="inherit" />
          </IconButton>
        }
        <span className={styles.itemName}>{item}</span>
        {moveRight &&
          <IconButton onClick={() => moveRight(idx)} size="small">
            <KeyboardArrowRight fontSize="inherit" />
          </IconButton>
        }
      </div>
    ))}
    <Button onClick={addItem}>+ Add a Card</Button>
  </div>
);

export default List;
