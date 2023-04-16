import { combineReducers } from "redux";
import { authReducer } from "./authSlice";
// import { createReducer } from "./CreateProductSlice";

const reducer = combineReducers({
	// create: createReducer,
	auth: authReducer,
});

export default reducer;
