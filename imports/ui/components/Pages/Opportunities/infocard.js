import React, { Component } from 'react';

import { Button, Card, Elevation } from "@blueprintjs/core";
import { FUNDINGDATA } from './data/funding-data.js';
import { Grid, Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

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

        <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    
                    <th>Organisation</th>
                    <th>Type</th>
                    <th>Title</th>
                    <th>Country</th>
                    <th>Deadline</th>
                    <th>Apply</th>
                  </tr>
                </thead>
                 {FUNDINGDATA.slice(0, num_cards).map(item => 
                <tbody key={item.id}>
                  <tr style={{background: '#fff'}}>
                    <td>{item.organisation}</td>
                    <td>{item.type}</td>
                    <td>{item.title}</td>
                    <td>{item.country}</td>
                    <td>{item.deadline}</td>
                    <td><Button>Apply</Button></td>
                  </tr>
                  
                </tbody>)}
              </Table>;
          

          <div style={{textAlign:'center', marginTop: 20}}>
          <Button onClick={() => this.setState({num_cards: 20})}>Show More</Button>
          </div>
      </div>

    );
  }
}

export default Infocard;

