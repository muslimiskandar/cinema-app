import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
