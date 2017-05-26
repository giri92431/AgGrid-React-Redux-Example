
// import beginAjaxCall from "./AjaxStatusActions"
import * as types  from "./actionType"
import DataFactoryApi from  "../../api/DataFactoryAPi";

export function LoadHeaderDataSucusses(data){
  return {type: types.LOAD_Header_GRID_DATA,data};
}

export function LoadRowDataSucusses(data){
  return {type: types.LOAD_GRID_DATA,data};
}


export function loadGridHeader(){
  return function (dispatch){
    return DataFactoryApi.createColHeader().then(GetData=> {
      dispatch(LoadHeaderDataSucusses(GetData));
    }).catch(error=> {throw(error);
    });
  };
}

export function loadGridRowData() {
  return function (dispatch) {
    return DataFactoryApi.createRowData().then(GetData => {
      dispatch(LoadRowDataSucusses(GetData));
    }).catch(error => {
      throw(error);
    });
  };
}


