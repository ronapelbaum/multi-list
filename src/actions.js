export const Types = {
  ADD_ITEM: 'ADD_ITEM',
  MOVE_ITEM: 'MOVE_ITEM',
};

export const addItem = (listName, newItem) => ({
  listName,
  newItem,
  type: Types.ADD_ITEM,
});

export const moveItem = (colIdx, itemIdx, change) => ({
  colIdx,
  itemIdx,
  change,
  type: Types.MOVE_ITEM,
});
