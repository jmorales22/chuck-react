import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    return (
      <select>
        <option value="animal">Animal</option>
        <option value="career">Career</option>
        <option value="celebrity">Celebrity</option>
        <option value="dev">Dev</option>
      </select>
    );
  }
}

export default Dropdown;
