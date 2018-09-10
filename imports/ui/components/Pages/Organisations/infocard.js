import React, { Component } from 'react';
import SortTable from './Table.js'

import { Button, Card, Elevation } from "@blueprintjs/core";
import { FUNDINGDATA } from './data/funding-data.js';
import { Grid, Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Infocard extends React.Component {


state = {num_cards: 10}
renderSwitch(num_cards){
  switch(num_cards){
         case 20:
            return 20;
          default:
          return 10;
  }
}


  render() {

      const {num_cards} = this.state

    return (
 
    
        <div>
        <SortTable />

        {FUNDINGDATA.slice(0, num_cards).map(item => 
          <div key={item.id}>
          <Card interactive={true} elevation={Elevation.TWO} style={{margin: 5, padding: 10, paddingLeft: 20}}>
           <h5><a href="#">{item.organisation}</a></h5>
           <h6>{item.type}</h6>
           <p>{item.title}</p>
           <Button>Apply</Button>
          </Card>
          </div>)}

          <div style={{textAlign:'center', marginTop: 20}}>
          <Button onClick={() => this.setState({num_cards: 20})}>Show More</Button>
          </div>

      </div>

    );
  }
}

export default Infocard;

