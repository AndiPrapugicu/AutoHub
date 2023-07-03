import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Carlist from "./pages/Cars/Carlist/Carlist";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CarDetails from "./pages/Cars/Carlist/CarDetails";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/carlist" element={<Carlist />} />
        <Route path="/carlist/:carName" element={<CarDetails />} />
        <Route path="/account" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
