import React from 'react';
import PropTypes from 'prop-types';
import * as colors from '../utils/colors';
import styles from './ListsController.module.scss';
import * as CustomPropTypes from './proptypes';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import List from './List';

const ListsController = ({ lists, addItem, moveItem }) => (
  <div className={styles.container}>
    {lists.map((list, colIdx) => (
      <List
        key={list.name}
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

ListsController.propTypes = {
  lists: PropTypes.arrayOf(CustomPropTypes.List),
  addItem: PropTypes.func.isRequired,
  moveItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  lists: state.lists.map((d, i) => ({ ...d, color: colors.color(i) })),
});

const mapDispatchToProps = dispatch => ({
  addItem: (listName, newItem) => dispatch(Actions.addItem(listName, newItem)),
  moveItem: (colIdx, itemIdx, change) => dispatch(Actions.moveItem(colIdx, itemIdx, change)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListsController);
