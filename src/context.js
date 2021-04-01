import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(detailProduct);
  const [myCart, setMyCart] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

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
    addTotals();
  };

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };
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

  const increment = (id) => {
    let tempCart = myCart;
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    setMyCart(tempCart);
    addTotals();
  };

  const decrement = (id) => {
    let tempCart = myCart;
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;

      setMyCart(tempCart);
    }
  };

  const removeItem = (id) => {
    let tempProducts = products;
    let tempCart = myCart;
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setMyCart(tempCart);
    setProducts(tempProducts);
    addTotals();
  };

  const clearCart = () => {
    setMyCart([]);
    loadProducts();
    addTotals();
  };

  const addTotals = () => {
    let subTotal = 0;
    myCart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };
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
        clearCart: clearCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
