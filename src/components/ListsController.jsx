import React from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import * as colors from '../utils/colors';
import styles from './ListsController.module.scss';
import List from './List';
import { connect } from 'react-redux';
import * as Actions from '../actions';

const ListsController = ({ lists, addItem, moveItem }) => (
  <div className={styles.container}>
    {lists.map((list, colIdx) => (
      <List
        name={list.name}
        color={list.color}
        items={list.items}
        addItem={() => {
          const newItem = window.prompt('What is your new card about?');
          addItem(list.name, newItem);
        }}
        moveLeft={colIdx > 0 && (itemIdx => {
          moveItem(colIdx, itemIdx, -1);
        })}
        moveRight={colIdx < lists.length - 1 && (itemIdx => {
          moveItem(colIdx, itemIdx, +1);
        })}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = dispatch => ({
  addItem: (listName, newItem) => dispatch(Actions.addItem(listName, newItem)),
  moveItem: (colIdx, itemIdx, change) => dispatch(Actions.moveItem(colIdx, itemIdx, change)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListsController);
