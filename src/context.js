import React, { useState }from "react";
import {storeProducts, detailProduct} from './data'


const ProductContext = React.createContext();

const ProductProvider = (props) => {
    const [products, setProducts] = useState(storeProducts);
    const [productDetail, setProductDetail] = useState(detailProduct);
    const handleDetail = () => {
        console.log('hello handle detail')
    }
    const addToCart = () => {
        console.log('addToCart')
    }
    return (
        <ProductContext.Provider value={{
           products: products, productDetail: productDetail, handleDetail: handleDetail, addToCart: addToCart
        }}>
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
