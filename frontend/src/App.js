import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignUp from "./components/User/LoginSignUp/LoginSignUp";
import AboutUs from "./Pages/Home/AboutUs/AboutUs";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import AllProducts from "./Pages/Products/AllProducts/AllProducts";
import Diamonds from "./Pages/Products/Diamonds/Diamonds";
import Gold from "./Pages/Products/Gold/Gold";
import Silver from "./Pages/Products/Silver/Silver";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/gold" element={<Gold />} />

          <Route path="/silver" element={<Silver />} />

          <Route path="/diamonds" element={<Diamonds></Diamonds>} />

          <Route path="/aboutus" element={<AboutUs />} />

          {/* <Route path="/ourservice" element={<OurService />} />

          <Route path="/jwellerybag" element={<JwelleryBag />} />

          <Route path="/jwellerybox" element={<JwelleryBox />} />

          <Route path="/jwellerymachine" element={<JwelleryMachine />} />

          <Route path="/menufactureitem" element={<MenufactureItem />} /> */}

          <Route path="/products" element={<AllProducts />}></Route>

          <Route path="/product/:id" element={<ProductDetail />}></Route>

          <Route path="/product/:keyword" element={<AllProducts />}></Route>

          <Route path="/product/:category" element={<AllProducts />}></Route>

          <Route path="/login" element={<LoginSignUp></LoginSignUp>}></Route>

          {/* <Route path="/login" element={<Login></Login>}></Route>

          <Route path="/register" element={<Register />}></Route> */}

          {/* <Route path="/search" element={<Search />}></Route> */}

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
