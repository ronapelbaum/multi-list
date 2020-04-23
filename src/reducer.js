import { Types } from './actions';
import cloneDeep from 'lodash/cloneDeep';

const mockData = [
  { name: 'Foobar', items: ['a', 'b', 'a', 'b'] },
  { name: 'Interview prep', items: ['a2', 'b2'] },
  { name: 'Shopping list', items: ['a2', 'b2'] },
  { name: 'another column', items: ['a2', 'b2'] },
];

const initialState = {
  lists: mockData,
};

const listsReducer = (state = initialState, action) => {
  console.log('rapelbaum - reducer', action);
  
  switch (action.type) {
    case Types.ADD_ITEM:
      const lists = cloneDeep(state.lists);
      lists.find(d => d.name === action.listName)
        .items
        .push(action.newItem);
        
      return {
        ...state,
        lists,
      };
    default:
      return state;
  }
};

export default listsReducer;
