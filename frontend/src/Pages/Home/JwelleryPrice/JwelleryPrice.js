import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getUnits } from "../../../redux/actions/unitAction";
// import "./JwelleryPrice.css";
import PriceData from "./PriceData";

const JwelleryPrice = () => {
  const alert = useAlert();

  const dispatch = useDispatch();
  const { loading, error, units } = useSelector((state) => state.units);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getUnits());
  }, []);

  return (
    // <div className='container'>
    <div className="ticker">
      {/* <div className='title'><h5>Jwellery Price</h5></div> */}
      <div className="news">
        <marquee>
          {units &&
            units.map((item) => (
              <PriceData key={item.name} item={item}></PriceData>
            ))}
        </marquee>
      </div>
    </div>

    // </div>
  );
};

export default JwelleryPrice;
