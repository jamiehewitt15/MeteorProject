import React, { Component } from 'react';

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

class Searchmenu extends React.Component {
  



  render() {



    return (
 



<Navbar style={{ paddingTop: 10, paddingBottom: 5, marginTop: 20, background: '#f9fafb'}}>
   
        <Popover icon="blank" content={<Menu>
                                <MenuItem text="Agriculture" />
                                <MenuItem text="Health" />
                                <MenuItem text="Climate Change" />
                                <MenuItem text="Gender" />
                                <MenuItem text="Education" />
                                <MenuItem text="Finance" />
                                <MenuItem text="Policy" />
                          </Menu>} >
          <Button style={{ marginRight: 10}} text="Sector" minimal="true" />
        </Popover>
        <Popover icon="blank" content={<Menu>
                                <MenuItem text="North America" />
                                <MenuItem text="South America" />
                                <MenuItem text="Europe" />
                                <MenuItem text="Asia" />
                                <MenuItem text="Africa" />
                                <MenuItem text="Pacific" />
                                
                          </Menu>} >
          <Button style={{ marginRight: 10}} text="Location" minimal="true" />
        </Popover>
        <Popover icon="blank" content={<Menu>
                                <MenuItem text="<$10k" />
                                <MenuItem text="$10k - $50k" />
                                <MenuItem text="$50k - $250k" />
                                <MenuItem text="$250k - $500k" />  
                                <MenuItem text="$500k - $1m" /> 
                                <MenuItem text="$1m +" /> 
                          </Menu>} >
          <Button style={{ marginRight: 10}} text="Salary" minimal="true"/>
        </Popover>
        
        
</Navbar>

    );
  }
}

export default Searchmenu;

