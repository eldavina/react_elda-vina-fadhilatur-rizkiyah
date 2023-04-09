import { combineReducers } from "redux";
import { createReducer } from "./CreateProductSlice";

const reducer = combineReducers({
	create: createReducer,
});

export default reducer;
