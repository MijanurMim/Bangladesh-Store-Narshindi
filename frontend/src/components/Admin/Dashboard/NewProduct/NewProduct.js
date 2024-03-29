import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErrors,
  createProduct,
} from "../../../../redux/actions/productAction";
import { NEW_PRODUCT_RESET } from "../../../../redux/constants/productConstants";
import Sidebar from "../../Sidebar/Sidebar";

const categories = [
  "Gold Anklet",
  "Gold Bala",
  "GOld Bangal",
  "Gold Crown",
  "Gold Chur",
  "Gold Chain",
  "Gold Earrings",
  "Gold Finger Ring",
  "Gold Locket",
  "Gold Mangalsutra",
  "Gold Nosepin",
  "Gold Necklace",
  "Gold Pola",
  "Gold Shakha",
  "Gold Shitahar",
  "Gold Tiara",
  "Gold Tikli",
  "Gold Others",
];

const NewProduct = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [inputs, setInputs] = useState({});
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const product = { ...inputs, images: images };
  console.log(product);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);

  const handleCreateProduct = (e) => {
    e.preventDefault();

    dispatch(createProduct(product));
  };

  //   Image Handler
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Sidebar></Sidebar>
          </div>
          <div className="col-8">
            {/* New Product Form  */}
            <h1>Create New Product</h1>
            <form encType="multipart/form-data" onSubmit={handleCreateProduct}>
              <div>
                <input
                  type="text"
                  placeholder="Product Name"
                  required
                  name="name"
                  onChange={handleChange}
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  name="price"
                  type="number"
                  placeholder="Price"
                  required
                  // onChange={(e) => setPrice(e.target.value)}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  placeholder="Product Description"
                  required
                  name="description"
                  cols="30"
                  rows="1"
                  onChange={handleChange}
                  // onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Product Weight"
                  required
                  name="weight"
                  onChange={handleChange}
                  // onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <div>
                <label>Choose Categories</label>
                <select name="category" onChange={handleChange}>
                  {categories.map((cate) => (
                    <option key={cate} value={cate}>
                      {cate}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Stock"
                  required
                  name="Stock"
                  onChange={handleChange}
                  // onChange={(e) => setStock(e.target.value)}
                />
              </div>

              {/* Images */}
              <div>
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  multiple
                  onChange={createProductImagesChange}
                  // onChange={(e) => setImages(e.target.files)}
                />
              </div>

              <div>
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Product Preview" />
                ))}
              </div>

              <button type="submit" disabled={loading ? true : false}>
                Create Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
