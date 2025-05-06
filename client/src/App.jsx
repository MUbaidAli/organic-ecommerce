import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
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
