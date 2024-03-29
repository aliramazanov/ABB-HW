import "./Header.scss";
import React from "react";
import PropTypes from "prop-types";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <h1>Hobby Shop</h1>
        <div className="header-your-items">
          <h2>Favourites: {this.props.favouritesCount}</h2>
          <h2 id="header-basket">Basket: {this.props.basketCount}</h2>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  favouritesCount: PropTypes.number.isRequired,
  basketCount: PropTypes.number.isRequired,
};
