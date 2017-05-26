/**
 * Created by Girish.Kumar on 17-05-2017.
 */

 class DataFactoryApi  {
  static constructor() {
    try {
      this.GetData = require("./EmmaTest.json");
    }catch(err){
      this.GetData =  require("./Data.json");
    }

  }
   static createColHeader (){
   let jsonFile = this.GetData;
   let ColHeader =[];
   for( let key in jsonFile)
    {
      ColHeader.push({
        headerName: key,
        field:key ,
        editable:true ,
        enableRowGroup: true,
        enablePivot: true,
      });
    }
    return new Promise((resolve, reject)=>{ setTimeout(()=>{
      resolve(Object.assign([],ColHeader));},10);
    });
    }


  static createRowData () {
    return new Promise((resolve, reject)=>{ setTimeout(()=>{
      resolve(Object.assign([],this.GetData));},10);
    });
  }

}

export default DataFactoryApi;
