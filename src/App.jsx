import React from "react";
import { Box } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./layout/Layout.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home/Home.jsx";
import Product from "./pages/Product/Product.jsx";
import MyCart from "./pages/MyCart/MyCart.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import About from "./pages/About/About.jsx";
import Category from "./pages/Category.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Welcome from "./pages/Welcome/Welcome.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import BrandProducts from "./components/BrandProducts/BrandProducts.jsx"
import UnauthenticatedRoute from './routes/UnauthenticatedRoute.jsx';
import CartProvider from "./context/CartContext.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>

        <AuthProvider>
          <CartProvider>
            <Box className="App" style={{ width: "100%" }}>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:productId" element={<Product />} />
                  <Route path="/about" element={<About />} />
                  <Route element={<UnauthenticatedRoute />}>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                  </Route>
                  <Route path="/:category" element={<Category />} />
                  <Route path="/brands/:brand" element={<BrandProducts />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/myCart" element={<MyCart />} />
                    <Route path="/welcome" element={<Welcome />} />

                  </Route>
                </Routes>
              </Layout>
            </Box>
          </CartProvider>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
