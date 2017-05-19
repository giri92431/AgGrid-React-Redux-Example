import React from 'react';
// import {reactCellRendererFactory} from '../../../node_modules/ag-grid-react';


import {AgGridReact} from '../../../node_modules/ag-grid-react';

import "../../../node_modules/ag-grid/dist/styles/ag-grid.css"
import "../../../node_modules/ag-grid/dist/styles/theme-fresh.css"

import DataFactory from "./DataFactory.js";



class AgGrid extends React.Component {

  constructor(){
    super();
    let data = new DataFactory();
    this.state = {
      quickFilter: "",
      showGrid: true,
      columnDef: data.createColHeader(),
      rowData: data.createRowData(),


    };

    this.gridOptions = {
      //We register the react date component that ag-grid will use to render
      // dateComponentFramework:MyReactDateComponent,
      // this is how you listen for events using gridOptions
      onModelUpdated: function () {
        console.log('event onModelUpdated received');
      },
      defaultColDef : {
        // headerComponentFramework : MyReactHeaderComponent,
        headerComponentParams : {
          menuIcon: 'fa-bars'
        }
      },
      // this is a simple property
      rowBuffer: 10, // no need to set this, the default is fine for almost all scenarios

    };
    // binding
    this.onGridReady = this.onGridReady.bind(this);
    this.onRowSelected = this.onRowSelected.bind(this);
    this.onCellClicked = this.onCellClicked.bind(this);
  }

  onGridReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
  }
  onShowGrid(show) {
    this.setState({
      showGrid: show
    });
  }
  selectAll() {
    this.api.selectAll();
  }

  onCellClicked(event) {
    console.log(event);
  }
  onRowSelected(event) {
    console.log(event);
  }
  onBtShowLoading() {
    this.gridOptions.api.showLoadingOverlay();
}


  dobFilter () {
    let dateFilterComponent = this.gridOptions.api.getFilterInstance('dob');
    dateFilterComponent.setFilterType('equals');
    dateFilterComponent.setDateFrom('2000-01-01');
    this.gridOptions.api.onFilterChanged();

  }
  render(){
     let gridTemplate;
    gridTemplate = (
      <div style={{height: "90vh"}} className="ag-fresh">
        <AgGridReact

          // gridOptions is optional - it's possible to provide
          // all values as React props
          gridOptions={this.gridOptions}

          // listening for events
          onGridReady={this.onGridReady}
          onRowSelected={this.onRowSelected}
          // onCellClicked={this.onCellClicked}

          // binding to simple properties
          //showToolPanel={this.state.showToolPanel}
          quickFilterText={this.state.quickFilterText}

          // binding to array properties
          columnDefs={this.state.columnDef}
          rowData={this.state.rowData}

          // enabeling evenets
          enableFilter="true"
          enableSorting="true"
         // pagination = "true"
          enableRangeSelection = "true"



        />
      </div>
    );

    return (<div style={{width: '100%'}}>
      <div style={{padding: '4px'}}>
        {gridTemplate}
      </div>
    </div>);
  }

}

export default AgGrid;

