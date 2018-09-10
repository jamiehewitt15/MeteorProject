import React, { Component } from 'react';
import { FUNDINGDATA } from './data/funding-data.js';
import {BootstrapTable, TableHeaderColumn, caretRender} from 'react-bootstrap-table';
import { Icon, Button, MenuItem  } from "@blueprintjs/core";







class SortTable extends React.Component {
   constructor(props) {
    super(props);
    
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
      defaultSortName: "Type",  //default sort column name
      defaultSortOrder: "desc",  //default sort order
    };

    return (
      <div>
       
        <BootstrapTable ref='table' data={ FUNDINGDATA } options={ options }  headerStyle={ { background: '#f9fafb' } } tableStyle={ { background: '#ffffff' } } pagination expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent } search searchPlaceholder='Type to search...'>
            <TableHeaderColumn dataField='Opportunity' isKey={ true } width='450px' dataSort={ true } caretRender={ this.renderCaret }>Opportunity  </TableHeaderColumn>
            <TableHeaderColumn dataField='Type'  dataSort={ true } caretRender={ this.renderCaret }>Type  </TableHeaderColumn>
            <TableHeaderColumn dataField='Regions'  dataSort={ true } caretRender={ this.renderCaret }>Regions  </TableHeaderColumn>            
            <TableHeaderColumn dataField='Posted' dataSort={ true } caretRender={ this.renderCaret }>Posted  </TableHeaderColumn>
            
                   
            </BootstrapTable>
      </div>
    );
  }
}

export default SortTable;