import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUserAvatarAsyncAction,
  getUserInfoAsyncAction,
  updateUserInfoAsyncAction,
} from '../redux/actions/userActions';
import { TAppDispatch, TRootState } from '../redux/store';

const useUserInfo = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const loading = useSelector((state: TRootState) => state.user.isLoading);
  const userInfo = useSelector((state: TRootState) => state.user.userInfo);

  const getUserInfo = () => {
    dispatch(getUserInfoAsyncAction());
  };

  const updateUserInfo = (username?: string, avatar?: string) => {
    return dispatch(updateUserInfoAsyncAction({ username, avatar })).unwrap();
  };

  const deleteUserAvatar = () => {
    return dispatch(deleteUserAvatarAsyncAction());
  };

  return {
    loading,
    userInfo,
    getUserInfo,
    updateUserInfo,
    deleteUserAvatar,
  };
};

export default useUserInfo;
