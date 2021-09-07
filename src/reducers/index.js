import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  cartReducer,
  authReducer
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;
