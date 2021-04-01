import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(detailProduct);
  const [myCart, setMyCart] = useState(storeProducts);
  const [modalState, setModalState] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setProductDetail(product);
  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    let tempProduct = myCart;
    tempProduct.push(product);
    setProducts(tempProducts);
    setMyCart(tempProduct);
  };

  const openModal = id => {
    const product = getItem(id);
    setModalProduct(product);
    setModalState(true);
  }

  const closeModal = () => {
    setModalState(false);
  }
  const loadProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    setProducts(tempProducts);
  };
  useEffect(() => {
    loadProducts();
  }, []);
  
  const increment = id => {
    console.log("increment function")
  }
  const decrement = id => {
    console.log("decrement function")
  }

  const removeItem = id => {
    console.log("item removed")
  }

  const clearCart = () => {
    console.log('cleared cart')
  }
  return (
    <ProductContext.Provider
      value={{
        products: products,
        productDetail: productDetail,
        handleDetail: handleDetail,
        addToCart: addToCart,
        openModal: openModal,
        closeModal: closeModal,
        modalState: modalState,
        modalProduct: modalProduct,
        myCart: myCart,
        cartSubTotal: cartSubTotal,
        cartTax: cartTax,
        cartTotal: cartTotal,
        increment: increment,
        decrement: decrement,
        removeItem: removeItem,
        clearCart: clearCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
