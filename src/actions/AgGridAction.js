
// import beginAjaxCall from "./AjaxStatusActions"
import * as types  from "./actionType"
import DataFactoryApi from  "../../api/DataFactoryAPi";

export function LoadHeaderDataSucusses(Headerdata){
  return {type: types.LOAD_Header_GRID_DATA,Headerdata};
}

export function LoadRowDataSucusses(data){
  return {type: types.LOAD_GRID_DATA,data};
}


export function loadGridHeader(){
  return function (dispatch){
    let DataApi = new DataFactoryApi();
    return DataApi.createColHeader().then(Data=> {
      dispatch(LoadHeaderDataSucusses(Data));
    }).catch(error=> {throw(error);
    });
  };
}

export function loadGridRowData() {
  return function (dispatch) {
    let DataApi = new DataFactoryApi();
    return DataApi.createRowData().then(Data => {
      dispatch(LoadRowDataSucusses(Data));
    }).catch(error => {
      throw(error);
    });
  };
}


