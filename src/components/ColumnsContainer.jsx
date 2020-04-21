import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';
import * as colors from '../utils/colors';
import styles from './ColumnsContainer.module.scss';
import Column from './Column';


const mockData = [
  { name: 'Foobar', items: ['a', 'b', 'a', 'b'] },
  { name: 'Interview prep', items: ['a2', 'b2'] },
  { name: 'Shopping list', items: ['a2', 'b2'] },
  { name: 'another column', items: ['a2', 'b2'] },
];

// basically the controller
class ColumnsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      columns: mockData.map((d, i) => ({ ...d, color: colors.color(i) })),
    };
    
    this.addItem = this.addItem.bind(this);
    this.moveItem = this.moveItem.bind(this);
  }

  addItem(columnName, newItem) {
    const columns = cloneDeep(this.state.columns);
    columns.find(d => d.name === columnName)
      .items
      .push(newItem);
      
    this.setState({
      ...this.state,
      columns,
    });
  }

  moveItem(colIdx, itemIdx, change) {
    const columns = cloneDeep(this.state.columns);
    const movedItem = columns[colIdx].items.splice(itemIdx, 1).pop();
    columns[colIdx + change].items.push(movedItem);
    
    this.setState({
      ...this.state,
      columns,
    });
  }
  render() { 
    const { columns } = this.state;
    
    return (
      <div className={styles.container}>
        {this.state.columns.map((column, colIdx) => (
          <Column
            name={column.name}
            color={column.color}
            items={column.items}
            addItem={() => {
              const newItem = window.prompt('What is your new card about?');
              this.addItem(column.name, newItem);
            }}
            moveLeft={colIdx > 0 && (itemIdx => {
              this.moveItem(colIdx, itemIdx, -1);
            })}
            moveRight={colIdx < columns.length - 1 && (itemIdx => {
              this.moveItem(colIdx, itemIdx, +1);
            })}
          />
        ))}
      </div>
    );
  }
}

export default ColumnsContainer;
