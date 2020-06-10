import { combineReducers } from 'redux';
import DataReducer from './reducers';

const rootReducer = combineReducers({
  data:DataReducer
});

export default rootReducer;