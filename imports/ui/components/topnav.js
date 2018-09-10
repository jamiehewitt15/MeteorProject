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
<Navbar>
    <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Sustainable Action</Navbar.Heading>
        
        </Navbar.Group>
        <Navbar.Group align={Alignment.LEFT}>
        
        <Navbar.Divider />
        
        <AccountsUIWrapper/>
    </Navbar.Group>
</Navbar>
    );
  }
}

export default Topnav;
