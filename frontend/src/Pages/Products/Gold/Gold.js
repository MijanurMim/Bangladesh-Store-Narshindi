import React from "react";
import { Col } from "react-bootstrap";
import anklet from "../../../images/Gold/anklet.png";
import bala from "../../../images/Gold/Bala.png";
import bangle from "../../../images/Gold/Bangle.png";
import chain from "../../../images/Gold/chain.png";
import chur from "../../../images/Gold/chur.png";
import crown from "../../../images/Gold/crown.png";
import earring from "../../../images/Gold/earring.png";
import fingerring from "../../../images/Gold/fingerring.png";
import locket from "../../../images/Gold/locket.png";
import mongalsutra from "../../../images/Gold/mongalsutra.png";
import necklace from "../../../images/Gold/necklace.png";
import nosepin from "../../../images/Gold/nosepin.png";
import others from "../../../images/Gold/others.png";
import pola from "../../../images/Gold/pola.png";
import shaka from "../../../images/Gold/sakha.png";
import sitahar from "../../../images/Gold/sitahar.png";
import tiara from "../../../images/Gold/tiara.png";
import tikli from "../../../images/Gold/tikli.png";
import Footer from "../../Home/Footer/Footer";
import NavBar from "../../NavBar/NavBar";

const Gold = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h2>
        Our <span style={{ color: "gray" }}>Gold </span> Products
      </h2>
      <div style={{ width: "90%" }} className="row mb-5 body mx-auto">
        <Col sm={6} md={4}>
          <div>
            <img
              className="img-fluid mt-5 box "
              height="300px"
              src={anklet}
              alt=""
            />
            <button type="button" className="btn btn-outline-secondary mt-4">
              <h5>Anklet</h5>{" "}
            </button>
          </div>
        </Col>
        <Col sm={6} md={4}>
          <img
            className="img-fluid  mt-5  box "
            height="300px"
            src={bala}
            alt=""
          />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Bala</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5  box " src={bangle} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Bangal</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5  box " src={crown} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Crown</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5  box " src={chur} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Chur</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box " src={chain} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Chain</h5>{" "}
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid mt-5  box " src={earring} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Earring</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5 " src={fingerring} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Finger Ring</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5  box" src={locket} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Locket</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5  box" src={mongalsutra} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Mongalsutra</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5 box " src={necklace} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Necklace</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5  box" src={nosepin} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Nosepin</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5 box " src={pola} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Pola</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5  box" src={shaka} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Sakha</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5  box" src={sitahar} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Sitahar</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5  box" src={tiara} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Tiara</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5   box" src={tikli} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Tikli</h5>
          </button>
        </Col>
        <Col sm={6} md={4}>
          <img className="img-fluid  mt-5  box " src={others} alt="" />
          <button type="button" className="btn btn-outline-secondary mt-4">
            <h5>Others</h5>
          </button>
        </Col>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gold;
