/**
 * Created by Girish.Kumar on 19-05-2017.
 */

import * as types from '../actions/actionType';
import initialState from './initalStatus';

export default function GetDataHeaderReducer(state = initialState.GetDataHeader,action) {

  switch (action.type){

    case types.LOAD_Header_GRID_DATA:
      return action.Headerdata;

    default:
      return state;
  }


}
