import "./App.scss";
import React, { Component } from "react";
import Product from "./components/Product";
import Header from "./components/Header";
import Button from "./components/Button";
import Modal from "./components/Modal";
import FavButton from "./components/FavButton";

class App extends Component {
  state = {
    isModalOpen: false,
    products: [],
    basket: [],
    favourites: [],
  };

  componentDidMount() {
    fetch("/data/data.JSON")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong...");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetch Result:", data);
        if (data.products) {
          this.setState({ products: data.products });
        } else {
          console.error("Something is missing...");
        }
      })
      .catch((error) => console.error("Error when fetching:", error));
  }

  handleOpenModalButton = (product) => {
    this.setState({ isModalOpen: true, selectedProduct: product });
  };

  handleClosingOfModal = () => {
    this.setState({ isModalOpen: false, selectedProduct: null });
  };

  handleContinueButtonClick = () => {
    const selectedProduct = this.state.selectedProduct;
    const basket = this.state.basket;

    if (selectedProduct) {
      const updatedBasket = [...basket, selectedProduct];
      this.setState(
        {
          basket: updatedBasket,
          isModalOpen: false,
          selectedProduct: null,
        },
        () => {
          localStorage.setItem("basket", JSON.stringify(updatedBasket));
        }
      );
    }
  };

  toggleFavourite = (product) => {
    const favourites = this.state.favourites;
    if (favourites.includes(product)) {
      this.removeFromFavourites(product);
    } else {
      this.addToFavourites(product);
    }
  };

  addToFavourites = (product) => {
    const updatedFavourites = [...this.state.favourites, product];
    this.setState({ favourites: updatedFavourites }, () => {
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    });
  };

  removeFromFavourites = (product) => {
    const updatedFavourites = this.state.favourites.filter(
      (item) => item !== product
    );
    this.setState({ favourites: updatedFavourites }, () => {
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    });
  };

  render() {
    const products = this.state.products;
    const basket = this.state.basket;
    const favourites = this.state.favourites;
    const isModalOpen = this.state.isModalOpen;

    return (
      <div className="app">
        <div className="header-part">
          <Header
            basketCount={basket.length}
            favouritesCount={favourites.length}
          />
        </div>
        <div className="product-welcome">
          <h1>Take a look at available items ➤</h1>
        </div>
        <div className="product-list">
          {products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              imgPath={product.imgPath}
              SKU={product.SKU}
              backgroundColor="antiquewhite"
            >
              <div className="buttons">
                <Button
                  backgroundColor="black"
                  onClick={() => this.handleOpenModalButton(product)}
                  text="Basket"
                />
                <FavButton
                  //Added this button instead of star icon
                  isFavourite={favourites.includes(product)}
                  onClick={() => this.toggleFavourite(product)}
                />
              </div>
            </Product>
          ))}
        </div>
        {isModalOpen && (
          <div className="modal-part" onClick={this.handleClosingOfModal}>
            <Modal
              header={<h1>Confirmation Message</h1>}
              close={
                <button
                  className="modal-close-button"
                  onClick={this.handleClosingOfModal}
                >
                  X
                </button>
              }
              text={
                <span className="modal-span">
                  Do you confirm adding this product to your basket?
                </span>
              }
              actions={
                <div className="actions">
                  <button
                    className="modal-action-buttons"
                    onClick={this.handleClosingOfModal}
                  >
                    Cancel
                  </button>
                  <button
                    id="continue"
                    className="modal-action-buttons"
                    onClick={this.handleContinueButtonClick}
                  >
                    Continue
                  </button>
                </div>
              }
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
