import React from "react";

class Button extends React.Component {
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

export default Button;
