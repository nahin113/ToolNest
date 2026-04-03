import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Product from "./components/product/Product";
import Banner from "./sections/Banner";
import Stats from "./sections/Stats";
import Steps from "./sections/Steps";
import Pricing from "./sections/Pricing";
import StatsEnd from "./sections/StatsEnd";
import Footer from "./components/common/Footer";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]); 
  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Product cart={cart} setCart={setCart}></Product>
      <ToastContainer></ToastContainer>
      <Steps></Steps>
      <Pricing></Pricing>
      <StatsEnd></StatsEnd>
      <Footer></Footer>
    </>
  );
}

export default App;
