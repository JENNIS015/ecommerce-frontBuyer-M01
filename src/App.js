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
import NotFound from "./notFound/NotFound";
import Loading from "./components/loading/Loading";
import ContainerCategory from "./components/container/ContainerCategory";
import Error500 from "./pageError/Error500";
function App() {
  const [productos, setProducts] = useState(null);

  const [categorias, setCategorias] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await BaseService.getData()
        .then((res) => {
          setProducts(res.data.product);
          setCategorias(
            Array.from(
              new Set(res.data.product.map((pValue) => pValue.categoria))
            )
          );
        })
        .catch(() => setLoading(true))
        .finally(() => setLoading(false));
    };
    getData();
  }, []);

  return (
    <CartContextProvider>
      <BrowserRouter>
        {loading !== true && productos!==null ? (
          <>
            <NavBar productos={productos} categorias={categorias} />
            <Switch>
              <Route exact path="/">
                <Homepage productos={productos} loading={loading} />
              </Route>
              <Route exact path="/productos">
                <Container
                  productos={productos}
                  categorias={categorias}
                  loading={loading}
                />
              </Route>
              <Route exact path="/categoria/:id">
                <ContainerCategory productos={productos} loading={loading} />
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
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer categorias={categorias} />
          </>
        ) : (
          <Error500 />
        )}
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
