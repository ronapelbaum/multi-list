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
    case Types.MOVE_ITEM:
      const lists1 = cloneDeep(state.lists);
      const movedItem = lists1[action.colIdx].items.splice(action.itemIdx, 1).pop();
      lists1[action.colIdx + action.change].items.push(movedItem);
    
      return {
        ...state,
        lists: lists1,
      };
    default:
      return state;
  }
};

export default listsReducer;
