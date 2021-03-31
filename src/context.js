import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(detailProduct);
  const handleDetail = () => {
    console.log("hello handle detail");
  };
  const addToCart = (id) => {
    console.log("addToCart id: " + id);
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
  return (
    <ProductContext.Provider
      value={{
        products: products,
        productDetail: productDetail,
        handleDetail: handleDetail,
        addToCart: addToCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
