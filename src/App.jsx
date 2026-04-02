import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Product from "./components/product/Product";
import Banner from "./sections/Banner";
import Stats from "./sections/Stats";
import Steps from "./sections/Steps";
import Pricing from "./sections/Pricing";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Product></Product>
      <ToastContainer></ToastContainer>
      <Steps></Steps>
      <Pricing></Pricing>
    </>
  );
}

export default App;
