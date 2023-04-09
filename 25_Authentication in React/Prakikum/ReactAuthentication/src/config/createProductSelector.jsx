import { useSelector } from "react-redux";

export const useCreateProductSelector = () =>
	useSelector((state) => state.create.createProduct);
export const useTypeProductSelector = () =>
	useSelector((state) => state.create.type);
