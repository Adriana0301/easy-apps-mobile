import { useDispatch } from "react-redux";
import { TAppDispatch, TRootState } from "../redux/store";

const useAuth = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const accessToken = useSelector((state: TRootState) => state.auth.accessToken);
  const loading = useSelector((state: TRootState) => state.auth.loading);

  const signInUser = (params: { email: string; password: string }) => {
    // dispatch(signInAsyncAction(params));
  };

  return {
    accessToken,
    loading,
    signIn: signInUser,
  };
};

export default useAuth;