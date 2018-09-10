import React, { Component } from 'react';
import { JOBSDATA } from './data/jobs-data.js';
import {BootstrapTable, TableHeaderColumn, caretRender} from 'react-bootstrap-table';
import { Icon, Button, MenuItem  } from "@blueprintjs/core";


function imageFormatter(cell, row){
    return "<img src='"+cell+"'/>" ;
  }

let order = 'desc';


class SortTable extends React.Component {
   constructor(props) {
    super(props);
    

    this.options = {
        defaultSortName: 'Organisation',  // default sort column name
        defaultSortOrder: 'desc'  // default sort order
      };
    }

  isExpandableRow(row) {
    if (row.id != "") return true;
    else return false;
  }

  expandComponent(row) {
    return (
      <span>hello</span>
    );
  }


  

renderCaret = (direction, fieldName) => {
  if (direction === 'asc') {
    return (
       <Icon  iconSize={10} icon="chevron-up" />
    );
  }
  if (direction === 'desc') {
    return (
       <Icon iconSize={10} icon="chevron-down" /> 
    );
  }
  return (
     <span><Icon iconSize={10} icon="chevron-up" /><Icon iconSize={10} icon="chevron-down" /></span>
  );
}

  render() {
    const options = {
      expandRowBgColor: 'rgb(242, 255, 163)',
      defaultSortName: "Organisation",  //default sort column name
      defaultSortOrder: "desc",  //default sort order
      };
    

    return (
      <div>
       
        <BootstrapTable ref='table' data={ JOBSDATA } options={ options }  headerStyle={ { background: '#f9fafb' } } tableStyle={ { background: '#ffffff' } } pagination expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent } search searchPlaceholder='Type to search...'>
            <TableHeaderColumn dataField='Image' dataFormat={imageFormatter} >  </TableHeaderColumn>
            <TableHeaderColumn dataField='Job' isKey={ true } dataSort width='450px' thStyle={ { 'fontWeight': 'bold' } } dataSort={ true } caretRender={ this.renderCaret }>Job  </TableHeaderColumn>
            <TableHeaderColumn dataField='Organisation'  dataSort={ true } caretRender={ this.renderCaret }>Organisation  </TableHeaderColumn>
            <TableHeaderColumn dataField='Deadline'  dataSort caretRender={ this.renderCaret }>Deadline  </TableHeaderColumn>            
            <TableHeaderColumn dataField='Tag1' dataSort >Phone  </TableHeaderColumn>
                   
            </BootstrapTable>
      </div>
    );
  }
}

export default SortTable;