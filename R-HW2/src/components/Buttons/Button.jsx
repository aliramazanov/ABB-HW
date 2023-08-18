import "./Button.scss";
import React from "react";
import PropTypes from "prop-types";

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

Button.propTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
