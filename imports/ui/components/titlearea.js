 import React, { Component } from 'react';
import Opportunities from './Pages/Opportunities/Opportunitiespage.js';
import Jobs from './Pages/Jobs/Jobspage.js';
import Organisations from './Pages/Organisations/Organisationspage.js';
import { Button, Card, Elevation, Navbar, AnchorButton } from "@blueprintjs/core";


class Titlecard extends React.Component {
  
  state = {infogroup: 'Funding opportunities'}

  renderSwitch(infogroup) {
  switch(infogroup) {
    case 'Jobs':
      return <Jobs />;
     case 'Funding Opportunities': 
      return <Opportunities />;
     case 'Organisations': 
      return <Organisations />;
    default:
      return <Opportunities />;
  }
}
  
  render() {

    const {infogroup} = this.state

    return (
<div> 
<Card interactive={false}  style={{margin: 0, paddingBottom: 5}}>
    <div style={{textAlign: 'center'}}>
    <h1 style={{marginRight: 10, color: '#333', lineHeight: 1.5, fontSize: '50px', fontWeight: 100}}>{infogroup}</h1>

    <AnchorButton minimal style={{marginRight: 10}} type='Jobs' onClick={() => this.setState({infogroup: 'Jobs'})}>
    Jobs
      </AnchorButton>
    <AnchorButton minimal style={{marginRight: 10}} type='Funding' onClick={() => this.setState({infogroup: 'Funding Opportunities'})}>
    Funding
      </AnchorButton>
    <AnchorButton minimal type='Companies' onClick={() => this.setState({infogroup: 'Organisations'})}>
        Companies
      </AnchorButton>
   
     
</div>

</Card>
{this.renderSwitch(infogroup)}
</div>
    );
  }
}

export default Titlecard;

