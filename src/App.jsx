import "./App.css";
import Navbar from "./components/common/Navbar";
import Product from "./components/product/Product";
import Banner from "./sections/Banner";
import Stats from "./sections/Stats";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Product></Product>
    </>
  );
}

export default App;
