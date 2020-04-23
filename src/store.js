import { createStore } from 'redux';
import listsReducer from './reducer';

const store = createStore(listsReducer);
export default store;
