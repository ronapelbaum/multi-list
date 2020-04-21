import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';

import styles from './ColumnsContainer.module.scss';
import Column from './Column';


const mockData = [
  { name: 'Foobar', items: ['a', 'b'] },
  { name: 'Interview prep', items: ['a', 'b'] },
  { name: 'Shopping list', items: ['a', 'b'] },
  { name: 'another column', items: ['a', 'b'] },
];

// basically the controller
class ColumnsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      columns: mockData,
    };
    this.addItem = this.addItem.bind(this);
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

  render() { 
    console.log('rapelbaum - ColumnsContainer render', this.state.columns);
    
    return (
      <div className={styles.container}>
        {this.state.columns.map(column => (
          <Column
            name={column.name}
            items={column.items}
            addItem={() => {
              const newItem = window.prompt('What is your new card about?');
              this.addItem(column.name, newItem);
            }}
          />
        ))}
      </div>
    );
  }
}

export default ColumnsContainer;
