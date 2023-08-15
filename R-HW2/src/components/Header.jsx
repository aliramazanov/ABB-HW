import React, { Component } from "react";

export default class Header extends Component {
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
