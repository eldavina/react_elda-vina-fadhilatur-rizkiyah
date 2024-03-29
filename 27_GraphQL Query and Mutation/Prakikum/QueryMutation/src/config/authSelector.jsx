import { useSelector } from "react-redux";

export const useAuthSelector = () => useSelector((state) => state.auth.isAuth);
