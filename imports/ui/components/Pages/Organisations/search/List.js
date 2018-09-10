import React, { Component } from "react";
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
} from "@blueprintjs/core";

export default class List extends Component {
  renderItem = (text, i) => {
    const { onClickItem } = this.props;

    return (
      <span class="bp3-tag .bp3-large" style={styles.item} onClick={() => onClickItem(i)}>
        {text}
      <button class="bp3-tag-remove"></button>
          </span>
    );
  };

  render() {
    const { list } = this.props;

    return (
     <div >
          
          
          {list.map(this.renderItem)}
          
           
            
            
      </div>
      
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  item: {
    marginLeft: 5,
    marginRight: 5,
    
  }
};
