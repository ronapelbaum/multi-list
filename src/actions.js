export const Types = {
  ADD_ITEM: 'ADD_ITEM',
};

export const addItem = (listName, newItem) => ({
  listName,
  newItem,
  type: Types.ADD_ITEM,
});
