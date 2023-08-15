import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        className="button-component"
        style={{ backgroundColor: this.props.backgroundColor }}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}
