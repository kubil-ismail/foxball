// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import matchReducer from './matchReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer,
  matchReducer,
});

// Exports
export default rootReducer;