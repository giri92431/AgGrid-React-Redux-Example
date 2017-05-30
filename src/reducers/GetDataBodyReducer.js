/**
 * Created by girish.kumar on 30-05-2017.
 */
import * as types from '../actions/actionType';
import initialState from './initalStatus';

export default function GetDataBodyReducer(state = initialState.GetDataBody,action) {

  switch (action.type){

  case types.LOAD_GRID_DATA:
      return action.data;

    default:
      return state;
  }


}
