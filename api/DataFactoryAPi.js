/**
 * Created by Girish.Kumar on 17-05-2017.
 */

 class DataFactoryApi  {
   constructor() {
    try {
      this.Data = require("./EmmaTest.json");
    }catch(err){
      this.Data =  require("./Data.json");
    }

  }
  createColHeader (){
   let jsonFile = this.Data[0];
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


  createRowData () {
    return new Promise((resolve, reject)=>{ setTimeout(()=>{
      resolve(Object.assign([],this.Data));},10);
    });
  }

}

export default DataFactoryApi;
