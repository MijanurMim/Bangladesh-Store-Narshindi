import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, createUnit } from "../../../../redux/actions/unitAction";
import { NEW_UNIT_RESET } from "../../../../redux/constants/unitConstant";
import Spinner from "../../../spinner/Spinner";
import Sidebar from "../../Sidebar/Sidebar";

const NewUnit = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.newUnit);

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const unit = { ...inputs };
  console.log(unit);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Unit Created Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: NEW_UNIT_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);

  //  Handle Create Accessory
  const handleCreateUnit = (e) => {
    e.preventDefault();

    dispatch(createUnit(unit));
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Sidebar></Sidebar>
            </div>
            <div className="col-8">
              {/* New Product Form  */}
              <h1>Create New Unit</h1>
              <form encType="multipart/form-data" onSubmit={handleCreateUnit}>
                <div>
                  <input
                    type="text"
                    placeholder="Unit Name"
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

                <button type="submit" disabled={loading ? true : false}>
                  Create Unit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewUnit;
