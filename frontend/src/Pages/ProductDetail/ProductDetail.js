import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import {
  clearErrors,
  getProductDetails,
} from "../../redux/actions/productAction";
import ReviewCard from "./ReviewCard/ReviewCard";

const ProductDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert]);

  //   Rating Options
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <div>
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className=""
                    key={item.url}
                    src={item.url}
                    alt={`${i}`}
                  ></img>
                ))}
            </div>
            <div>
              <div>
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
              </div>
              <div></div>
              <div>
                <b>{product.Stock < 1 ? "Out Of Stock" : "In Stock"}</b>
              </div>
              <div className="">
                <ReactStars {...options}></ReactStars>
                <span>({product.numOfReviews} Reviews)</span>
              </div>
              <div>
                Description: <p>{product.description}</p>
              </div>
              <button>Submit Review </button>
            </div>
          </div>

          {/* Reviews Section  */}
          <div>
            <h3>Reviews</h3>
            {product.reviews && product.reviews[0] ? (
              <>
                <div>
                  {product.reviews &&
                    product.reviews.map((review) => (
                      <ReviewCard review={review}></ReviewCard>
                    ))}
                </div>
              </>
            ) : (
              <p>No Reviews Yet</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
