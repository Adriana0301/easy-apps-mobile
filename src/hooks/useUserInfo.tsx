import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoAsyncAction } from '../redux/actions/userActions';
import { TAppDispatch, TRootState } from '../redux/store';

const useUserInfo = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const loading = useSelector((state: TRootState) => state.user.isLoading);
  const userInfo = useSelector((state: TRootState) => state.user.userInfo);

  const getUserInfo = () => {
    dispatch(getUserInfoAsyncAction());
  };

  return {
    loading,
    userInfo,
    getUserInfo,
  };
};

export default useUserInfo;
