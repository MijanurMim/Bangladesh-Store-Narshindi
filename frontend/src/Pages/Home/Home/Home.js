import React from "react";
import NavBar from "../../NavBar/NavBar";
import AllProducts from "../../Products/AllProducts/AllProducts";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Catagories from "../Catagories/Catagories";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import JwelleryPrice from "../JwelleryPrice/JwelleryPrice";
import Owners from "../Owners/Owners";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <JwelleryPrice></JwelleryPrice>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <AllProducts></AllProducts>
      <Catagories></Catagories>
      <Owners></Owners>
      <ContactUs></ContactUs>
      {/* <ProductDetail></ProductDetail> */}
      {/* <ProductShow></ProductShow> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
