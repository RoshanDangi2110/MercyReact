import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import ongoing_banner from "./components/assets/banner.jpg";
import complete_banner from "./components/assets/banner.jpg";
import latest_banner from "./components/assets/banner.jpg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/ongoing"
            element={
              <ShopCategory banner={ongoing_banner} category="ongoing" />
            }
          />
          <Route
            path="/complete"
            element={
              <ShopCategory banner={complete_banner} category="complete" />
            }
          />
          <Route
            path="/latest"
            element={<ShopCategory banner={latest_banner} category="latest" />}
          />

          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
