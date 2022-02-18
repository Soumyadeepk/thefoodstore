import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./comp/Footer";
import Navbar from "./comp/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./pages/Cart";
import Billing from "./pages/Billing";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/billing" exact element={<Billing />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
