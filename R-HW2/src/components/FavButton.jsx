import React, { Component } from "react";

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

export default FavButton;
