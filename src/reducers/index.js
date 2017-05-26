import { combineReducers } from 'redux';

import {routerReducer} from 'react-router-redux';
import GetData from "./GetDataReducer";

const rootReducer = combineReducers({
  routing: routerReducer,
   GetData
});

export default rootReducer;
