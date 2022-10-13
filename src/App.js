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
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <NavBar productos={productos} categorias={categorias} />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/productos">
              <Container
                productos={productos}
                categorias={categorias}
                loading={loading}
              />
            </Route>
            <Route path="/categoria/:id">
              <Container
                productos={productos}
                categorias={categorias}
                loading={loading}
              />
            </Route>
            <Route
              path="/item/:id"
              loading={loading}
              component={ItemDetailContainer}
            />
            <Route path="/cart" component={Cart} />
            <Route path="/order" component={FormOrder} />
            <Route path="/sucess" component={Sucess} />
          </Switch>
          <Footer categorias={categorias} />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
