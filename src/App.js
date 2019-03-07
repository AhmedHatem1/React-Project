import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Containers/Header";
import Home from "./Containers/Home";
import AddProduct from "./Components/AddProduct";
import ProductDetails from "./Components/ProductDetails";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add-product" component={AddProduct} />
              <Route
                exact
                path="/product-details/:id"
                component={ProductDetails}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
