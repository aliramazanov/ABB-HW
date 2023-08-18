import React, { Component } from "react";
import PropTypes from "prop-types";
class FavButton extends Component {
  render() {
    const { isFavourite, onClick } = this.props;

    return (
      <button
        className={`custom-button ${isFavourite ? "favourite" : ""}`}
        onClick={onClick}
      >
        {isFavourite ? "★" : "☆"}
      </button>
    );
  }
}

FavButton.propTypes = {
  isFavourite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FavButton;
