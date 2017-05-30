import { combineReducers } from 'redux';

import {routerReducer} from 'react-router-redux';
import GetDataHeader from "./GetDataHeaderReducer";
import GetDataBody from "./GetDataBodyReducer"

const rootReducer = combineReducers({
  routing: routerReducer,
  GetDataHeader,
  GetDataBody
});

export default rootReducer;
