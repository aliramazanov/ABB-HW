import React from "react";
import { fetchData } from "./api.js";
import Product from "./components/Products/Product.jsx";
import Header from "./components/Header/Header.jsx";
import Button from "./components/Buttons/Button.jsx";
import Modal from "./components/Modal/Modal.jsx";
import FavButton from "./components/Buttons/FavButton.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import modalInfo from "./modalData.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      currentModalData: null,
      products: [],
      basket: [],
      favourites: [],
    };
  }

  componentDidMount() {
    fetchData()
      .then((data) => {
        if (data.products) {
          this.setState({ products: data.products });
        } else {
          console.error("Something is missing...");
        }
      })
      .catch((error) => console.error("Error when fetching:", error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.basket !== this.state.basket) {
      localStorage.setItem("basket", JSON.stringify(this.state.basket));
    }
    if (prevState.favourites !== this.state.favourites) {
      localStorage.setItem("favourites", JSON.stringify(this.state.favourites));
    }
  }

  handleOpenModalButton = (modalId) => {
    const modalData = this.findModalDataById(modalId);
    this.setState({ isModalOpen: true, currentModalData: modalData });
  };

  handleClosingOfModal = () => {
    this.setState({ isModalOpen: false, currentModalData: null });
  };

  findModalDataById = (modalId) => {
    return modalInfo.find((info) => info.id === modalId);
  };

  handleContinueButtonClick = () => {
    const selectedProduct = this.state.currentModalData;
    const basket = this.state.basket;

    if (selectedProduct) {
      const updatedBasket = [...basket, selectedProduct];
      this.setState({
        basket: updatedBasket,
        isModalOpen: false,
        currentModalData: null,
      });
    }
  };

  toggleFavourite = (product) => {
    this.setState((prevState) => {
      const isAlreadyFavourite = prevState.favourites.some(
        (item) => item.id === product.id
      );

      if (isAlreadyFavourite) {
        const updatedFavourites = prevState.favourites.filter(
          (item) => item.id !== product.id
        );
        return { favourites: updatedFavourites };
      } else {
        const updatedFavourites = [...prevState.favourites, product];
        return { favourites: updatedFavourites };
      }
    });
  };

  addToFavourites = (product) => {
    const updatedFavourites = [...this.state.favourites, product];
    this.setState({ favourites: updatedFavourites });
  };

  removeFromFavourites = (product) => {
    const updatedFavourites = this.state.favourites.filter(
      (item) => item !== product
    );
    this.setState({ favourites: updatedFavourites });
  };

  render() {
    const products = this.state.products;
    const basket = this.state.basket;
    const favourites = this.state.favourites;

    return (
      <div className="app">
        <div className="header-part">
          <Header
            basketCount={basket.length}
            favouritesCount={favourites.length}
          />
        </div>
        <Welcome />
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
                  text="Basket"
                  onClick={() => {
                    this.handleOpenModalButton("modalOne");
                  }}
                />
                <FavButton
                  isFavourite={favourites.includes(product)}
                  onClick={() => this.toggleFavourite(product)}
                />
              </div>
            </Product>
          ))}
        </div>
        {this.state.isModalOpen && (
          <Modal
            details={this.state.currentModalData}
            closeModal={this.handleClosingOfModal}
            handleContinueButtonClick={this.handleContinueButtonClick}
          />
        )}
      </div>
    );
  }
}

export default App;
