import React, { Component } from 'react';
import AccountsUIWrapper from './Login.js';

import {
    Alignment,
    Button,
    Classes,
    H5,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
} from "@blueprintjs/core";



class Topnav extends React.Component {
  render() {
    return (
        <div>
             
             
<Navbar>
    <Navbar.Group align={Alignment.LEFT}>
    
    <img src="https://static.123-reg.co.uk/library/images/v3/sprite/logo.svg"/>
        </Navbar.Group>
       
        <Navbar.Group align={Alignment.LEFT}>
        
        <Navbar.Divider />
        
        <AccountsUIWrapper />
    </Navbar.Group>
</Navbar>
</div>
    );
  }
}

export default Topnav;
