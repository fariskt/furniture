import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Categories from "./Components/Categories/Categories";
import Cart from "./Components/AddtoCart/Cart";
import { CartProvider } from "./context/AppContext";
import Login from "./Components/Registration/Login/Login";
import Signup from "./Components/Registration/Signup/Signup";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
