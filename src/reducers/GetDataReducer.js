/**
 * Created by Girish.Kumar on 19-05-2017.
 */

import * as types from '../actions/actionType';
import initialState from './initalStatus';

export default function GetDataReducer(state = initialState.GetData,action) {

  switch (action.type){
    case types.LOAD_GRID_DATA:
      return [{"asdad":"asdad"}];

    default:
      return state;
  }


}
