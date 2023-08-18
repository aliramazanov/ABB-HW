import "./Products.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    return (
      <div
        className="product-component-wrapper"
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        <div className="product-image-wrapper">
          <img src={process.env.PUBLIC_URL + this.props.imgPath} alt="Alt" />
        </div>
        <div className="product-info-actions">
          <div className="product-info">
            <h1 className="product-infos">Name: </h1>
            <h1 className="product-title">{this.props.name}</h1>
            <h2 className="product-infos"> Price: </h2>
            <h2 className="product-price">{this.props.price}$</h2>
            <h3 className="product-infos">SKU: </h3>
            <h3 className="product-sku">{this.props.SKU}</h3>
          </div>
          <div className="product-actions">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  backgroundColor: PropTypes.string,
  imgPath: PropTypes.string,
  name: PropTypes.string,
  SKU: PropTypes.string,
  children: PropTypes.node,
};
