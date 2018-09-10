import React, { Component } from "react";
import { InputGroup } from "@blueprintjs/core";

export default class Input extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleKeyPress = e => {
    if (e.key !== "Enter") return;

    const { onSubmitEditing } = this.props;
    const { value } = this.state;

    if (!value) return; // Don't submit if empty

    onSubmitEditing(value);
    this.setState({ value: "" });
  };

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;

    return (
      <div style={{paddingTop: 20}}>
      <InputGroup
        style={styles.input}
        leftIcon={"search"}
        large="true"
        type={"search"}
        value={value}
        placeholder={placeholder}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
      </div>
    );
  }
}

const styles = {
  input: {
    fontSize: "100%",
    marginTop: 0,
    paddingLeft: 40,
    borderWidth: 0
    
  }
};
