import { useDispatch, useSelector } from "react-redux";
import { signInAsyncAction } from "../redux/actions/authActions";
import { TAppDispatch, TRootState } from "../redux/store";

const useAuth = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const accessToken = useSelector<TRootState, string>((state: TRootState) => state.auth.accessToken);
  const loading = useSelector<TRootState, boolean>((state: TRootState) => state.auth.isLoading);

  const signInUser = (email: string, password: string) => {
    dispatch(signInAsyncAction({email, password}));
  };

  return {
    accessToken,
    loading,
    signIn: signInUser,
  };
};

export default useAuth;