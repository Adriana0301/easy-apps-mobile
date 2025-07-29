import { useDispatch, useSelector } from 'react-redux';
import {
  signInAsyncAction,
  signUpAsyncAction,
} from '../redux/actions/authActions';
import { TAppDispatch, TRootState } from '../redux/store';

const useAuth = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const accessToken = useSelector<TRootState, string>(
    (state: TRootState) => state.auth.accessToken,
  );
  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.auth.isLoading,
  );

  const signInUser = (email: string, password: string) => {
    dispatch(signInAsyncAction({ email, password }));
  };

  const signUpUser = (
    email: string,
    name: string,
    password: string,
    avatar?: string,
  ) => {
    dispatch(signUpAsyncAction({ email, name, password, avatar }));
  };

  return {
    accessToken,
    loading,
    signIn: signInUser,
    signUp: signUpUser,
  };
};

export default useAuth;
