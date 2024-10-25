import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/User/Home/Home";
import Categories from "./Pages/User/Categories/Categories";
import Cart from "./Components/User/Cart/Cart";
import { AppProvider } from "./context/AppContext";
import { CartProvider } from "./context/CartContext";
import Login from "./Pages/User/Login";
import Signup from "./Pages/User/Signup";
import ProductDetails from "./Pages/User/ProductDetails/ProductDetails";
import Payment from "./Pages/User/PaymentPage/Payment";
import Layout from "./Components/User/Layouts/Layout";
import DashBoard from "./Pages/Admin/DashBoard";
import AdminLayout from "./Components/Admin/AdminLayout/AdminLayout";
import AdminProducts from "./Pages/Admin/AdminProducts";
import AdminLogin from "./Pages/Admin/AdminLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment/:id" element={<Payment />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<AdminLayout/>}>
                <Route path="/admin/dashboard" element={<DashBoard/>}/>
                <Route path="/admin/products" element={<AdminProducts/>}/>
              </Route>
              <Route path="/admin/login" element={<AdminLogin/>}/>
            </Routes>
          </CartProvider>
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
