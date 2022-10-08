import { useState, useEffect } from "react";
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
import BaseService from "./services/dataList";
function App() {
  const [productos, setProducts] = useState(null);
  const [categorias, setCategorias] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await BaseService.getData().then((res) => {
        setProducts(res.data.product);
      });

      await BaseService.getCategorias()
        .then((res) => {
          setCategorias(res.data.cat);
        })

        // .catch((err) => setCategorias([]));
        .finally(() => setLoading(false));
    };
    getData();
  }, []);

  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar productos={productos} categorias={categorias} />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/productos">
              <Container
                productos={productos}
                categorias={categorias}
                loading={loading}
              />
            </Route>
            <Route exact path="/categoria/:id">
              <Container
                productos={productos}
                categorias={categorias}
                loading={loading}
              />
            </Route>
            <Route
              exact
              path="/item/:id"
              loading={loading}
              component={ItemDetailContainer}
            />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/order" component={FormOrder} />
            <Route exact path="/sucess" component={Sucess} />
          </Switch>
          <Footer categorias={categorias} />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
