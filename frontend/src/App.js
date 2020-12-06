import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";
import AddProductScreen from "./screen/AddProductScreen";
import EditProduct from "./screen/EditProduct";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={Home} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id" component={CartScreen} />
            <Route path="/AddProduct/" component={AddProductScreen} />
            <Route path="/EditProduct/:id" component={EditProduct} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
