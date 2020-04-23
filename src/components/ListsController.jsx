import React from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import * as colors from '../utils/colors';
import styles from './ListsController.module.scss';
import List from './List';
import { connect } from 'react-redux';
import { addItem } from '../actions';


const mockData = [
  { name: 'Foobar', items: ['a', 'b', 'a', 'b'] },
  { name: 'Interview prep', items: ['a2', 'b2'] },
  { name: 'Shopping list', items: ['a2', 'b2'] },
  { name: 'another column', items: ['a2', 'b2'] },
];

// basically the controller
class ListsController extends React.Component {
  constructor() {
    super();
    this.moveItem = this.moveItem.bind(this);
  }

  moveItem(colIdx, itemIdx, change) {
    const lists = cloneDeep(this.state.lists);
    const movedItem = lists[colIdx].items.splice(itemIdx, 1).pop();
    lists[colIdx + change].items.push(movedItem);
    
    this.setState({
      ...this.state,
      lists,
    });
  }
  render() { 
    const { lists, addItem } = this.props;
    
    return (
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
              this.moveItem(colIdx, itemIdx, -1);
            })}
            moveRight={colIdx < lists.length - 1 && (itemIdx => {
              this.moveItem(colIdx, itemIdx, +1);
            })}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = dispatch => ({
  addItem: (listName, newItem) => dispatch(addItem(listName, newItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListsController);
