import React, { Component } from 'react';
import Searchapp from './Searchapp.js'
import Searchmenu from './Searchmenu.js'
import {
    Card, 
    Elevation, 
    Tag,
    Alignment,
    Button,
    Classes,
    H5,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
    Icon,
    Popover,
    Menu,
    MenuItem,
} from "@blueprintjs/core";

class Searcharea extends React.Component {
  



  render() {



    return (
 
<Card  style={{marginTop: 20, marginLeft: '20%', marginRight: '20%', paddingRight: 0, paddingLeft: 0, paddingBottom: 0}}> 
   <div style={{paddingLeft: 20, paddingRight: 20 }}>
   <Searchapp />
   </div>
   <Searchmenu />


</Card>
    );
  }
}

export default Searcharea;

