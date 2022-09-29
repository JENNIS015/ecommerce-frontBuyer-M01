import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./css/style.css";
import Homepage from "./components/home/Homepage.jsx";
import ItemDetailContainer from "./components/container/itemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/cart/Cart.jsx";
import { CartContextProvider } from "./context/CartContext";
import Sucess from "./components/cart/Sucess";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Container from "./components/container/Container";
import FormOrder from "./components/cart/FormOrder";
function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/productos" component={Container} />
            <Route exact path="/categoria/:id" component={Container} />
            <Route exact path="/item/:id" component={ItemDetailContainer} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/order" component={FormOrder} />
            <Route exact path="/sucess" component={Sucess} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
