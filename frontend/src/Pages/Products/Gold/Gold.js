import { default as React, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/spinner/Spinner";
import { clearErrors, getProduct } from "../../../redux/actions/productAction";
import Products from "../Products/Products";
import "./Gold.css";

const categories = [
  "Anklet",
  "Bala",
  "Bangal",
  "Crown",
  "Chur",
  "Chain",
  "Earrings",
  "Finger Ring",
  "Locket",
  "Mangalsutra",
  "Nosepin",
  "Necklace",
  "Pola",
  "Shakha",
  "Shitahar",
  "Tiara",
  "Tikli",
  "Others",

  // "Gold Anklet",
  // "Gold Bala",
  // "GOld Bangal",
  // "Gold Crown",
  // "Gold Chur",
  // "Gold Chain",
  // "Gold Earrings",
  // "Gold Finger Ring",
  // "Gold Locket",
  // "Gold Mangalsutra",
  // "Gold Nosepin",
  // "Gold Necklace",
  // "Gold Pola",
  // "Gold Shakha",
  // "Gold Shitahar",
  // "Gold Tiara",
  // "Gold Tikli",
  // "Gold Others",
];

const Gold = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("Bala");

  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, category));
  }, [dispatch, error, alert, keyword, currentPage, category]);

  console.log(products);
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <h2>
            Our <span style={{ color: "gray" }}>Gold </span> Products
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-2">
                {/* Category Section  */}
                <h4>Categories</h4>
                <ul className="">
                  {categories.map((category) => (
                    <li
                      className="category"
                      key={category}
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="container col-10">
                <div class="row justify-content-center">
                  {products &&
                    products.map((product) => (
                      <Products key={product._id} product={product}></Products>
                    ))}
                </div>

                {/* Pagination section  */}
                {resultPerPage < productsCount && (
                  <div>
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    ></Pagination>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>

    // <div>
    //
    //
    //   <div style={{ width: "90%" }} className="row mb-5 body mx-auto">
    //     <Col sm={6} md={4}>
    //       <div>
    //         <img
    //           className="img-fluid mt-5 box "
    //           height="300px"
    //           src={anklet}
    //           alt=""
    //         />
    //         <button type="button" className="btn btn-outline-secondary mt-4">
    //           <h5>Anklet</h5>{" "}
    //         </button>
    //       </div>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img
    //         className="img-fluid  mt-5  box "
    //         height="300px"
    //         src={bala}
    //         alt=""
    //       />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Bala</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box " src={bangle} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Bangal</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box " src={crown} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Crown</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box " src={chur} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Chur</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid mt-5  box " src={chain} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Chain</h5>{" "}
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid mt-5  box " src={earring} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Earring</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5 " src={fingerring} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Finger Ring</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={locket} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Locket</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={mongalsutra} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Mongalsutra</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5 box " src={necklace} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Necklace</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={nosepin} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Nosepin</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5 box " src={pola} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Pola</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={shaka} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Sakha</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={sitahar} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Sitahar</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={tiara} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Tiara</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5   box" src={tikli} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Tikli</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box " src={others} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Others</h5>
    //       </button>
    //     </Col>
    //   </div>
    //
    // </div>
  );
};

export default Gold;
