import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Navbar />

      <HeroSection />
      <Features />
      <ShopByCategory />
      <ProductCarousel />
      <SaleSection />
      <ShopCard />
      <ReviewSlider />
      <Footer /> */}
    </>
  );
}

export default App;
