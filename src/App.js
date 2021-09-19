import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components/index";
import { HomePage, ProductsPage } from "./pages";
import AboutPage from "./pages/AboutPage/AboutPage.component";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage.component";
import ErrorPage from "./pages/ErrorPage/ErrorPage.component";
import SigninPage from "./pages/SigninPage/SigninPage.component";
import CartPage from "./pages/CartPage/CartPage.component";

import GlobalStyle from "./globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/products/:id">
          <SingleProductPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/signin">
          <SigninPage />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
