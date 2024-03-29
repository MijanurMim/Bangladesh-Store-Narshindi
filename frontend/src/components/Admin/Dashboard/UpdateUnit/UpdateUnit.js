import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearErrors, updateUnit } from "../../../../redux/actions/unitAction";
import { UPDATE_UNIT_RESET } from "../../../../redux/constants/unitConstant";
import Spinner from "../../../spinner/Spinner";
import Sidebar from "../../Sidebar/Sidebar";

const UpdateUnit = () => {
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const id = useParams();

  const { error, isUpdated, loading } = useSelector(
    (state) => state.updateUnit
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const unitData = { ...inputs };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Unit Updated Successfully");
      navigate("/admin/units");
      dispatch({ type: UPDATE_UNIT_RESET });
    }
  }, [dispatch, alert, error, navigate, isUpdated]);

  //  Handle Update Unit
  const handleUpdateUnit = (e) => {
    e.preventDefault();

    // Checking before Update
    const proceed = window.confirm("Are Your Sure ???");
    if (proceed) {
      dispatch(updateUnit(id.id, unitData));
    }
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
              <h1>Update Unit Info</h1>
              <form encType="multipart/form-data" onSubmit={handleUpdateUnit}>
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
                  Update Unit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateUnit;
