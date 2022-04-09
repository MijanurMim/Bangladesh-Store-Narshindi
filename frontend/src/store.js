import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  deleteProductReducer,
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
} from "./redux/reducers/productReducer";
import { userReducer } from "./redux/reducers/userReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  newReview: newReviewReducer,
  newProduct: newProductReducer,
  deleteProduct: deleteProductReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
