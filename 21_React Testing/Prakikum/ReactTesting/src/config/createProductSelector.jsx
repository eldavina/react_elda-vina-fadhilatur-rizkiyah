import { useSelector } from "react-redux";

const useCreateProductSelector = () =>
	useSelector((state) => state.create.createProduct);

export default useCreateProductSelector;
