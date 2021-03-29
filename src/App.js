import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import ProductList from "./components/ProductList/ProductList";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default/Default";

const App = () => {
  return (
    <React.Fragment>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
