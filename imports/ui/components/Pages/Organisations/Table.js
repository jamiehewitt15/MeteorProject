import React, { Component } from 'react';
import { ORGANISATIONDATA } from './data/organisation-data.js';
import {BootstrapTable, TableHeaderColumn, caretRender} from 'react-bootstrap-table';
import { Icon, Button, MenuItem  } from "@blueprintjs/core";




let order = 'desc';


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
      expandRowBgColor: 'rgb(242, 255, 163)'
    };

    return (
      <div>
       
        <BootstrapTable ref='table' data={ ORGANISATIONDATA }  headerStyle={ { background: '#f9fafb' } } tableStyle={ { background: '#ffffff' } } pagination expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent } search searchPlaceholder='Type to search...'>
            <TableHeaderColumn dataField='Organisation' isKey={ true } width='450px' dataSort={ true } caretRender={ this.renderCaret }>Organisation  </TableHeaderColumn>
            <TableHeaderColumn dataField='Web'  dataSort={ true } >Website  </TableHeaderColumn>
            <TableHeaderColumn dataField='Email'  dataSort={ true } >Email  </TableHeaderColumn>            
            <TableHeaderColumn dataField='Telephone' dataSort={ true } >Phone  </TableHeaderColumn>
            <TableHeaderColumn dataField='Type' dataSort={ true }  width='350px' >Sector  </TableHeaderColumn>
                   
            </BootstrapTable>
      </div>
    );
  }
}

export default SortTable;