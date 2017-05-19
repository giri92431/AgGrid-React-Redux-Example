/**
 * Created by Girish.Kumar on 17-05-2017.
 */

 class DataFactory  {
  constructor() {
      this.GetData ={ Data: require("./../../../api/EmmaTest.json")}

  }
   createColHeader (){
   let jsonFile = this.GetData.Data[0];
   var ColHeader =[];
   for( var key in jsonFile)
    {
      ColHeader.push({
        headerName: key,
        field:key ,
        editable:true ,
        enableRowGroup: true,
        enablePivot: true,
      })
    }
    return ColHeader;

  }

  createRowData () {
    return this.GetData.Data;
  }

}

export default DataFactory;
