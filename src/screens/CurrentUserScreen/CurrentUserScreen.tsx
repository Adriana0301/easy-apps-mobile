import { Formik } from 'formik';
import { useEffect } from 'react';
import { Alert, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import ActiveIndicator from '../../components/ActiveIndicator/ActiveIndicator';
import AppButton from '../../components/AppButton/AppButton';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppInput from '../../components/AppInput/AppInput';
import AvatarPicker from '../../components/AvatarPicker/AvatarPicker';
import TextError from '../../components/TextError/TextError';
import useGallery from '../../hooks/useGallery';
import useUserInfo from '../../hooks/useUserInfo';
import {
  deleteUserAvatarAsyncAction,
  updateUserInfoAsyncAction,
} from '../../redux/actions/userActions';
import { logout } from '../../redux/auth/authSlice';
import validationSchemaUpdateUserInfo from '../../validation/validationSchemaUpdateUserInfo';
import styles from './CurrentUserScreen.styles';

const showSuccesToast = () => {
  Toast.show({
    type: 'success',
    text1: 'User info changed successfully',
  });
};

const CurrentUserScreen = () => {
  const dispatch = useDispatch();
  const { pickPhoto } = useGallery();
  const { deleteUserAvatar, updateUserInfo, userInfo, loading, getUserInfo } =
    useUserInfo();

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Logout cancelled'),
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {
            dispatch(logout());
            console.log('User logged out');
          },
        },
      ],
      { cancelable: true },
    );
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <AppHeader label="Profile" />
      {loading ? (
        <ActiveIndicator />
      ) : (
        <Formik
          enableReinitialize
          initialValues={{
            avatar: userInfo?.avatar || '',
            username: userInfo?.username || '',
          }}
          onSubmit={async values => {
            const isChanged =
              values.username !== userInfo?.username ||
              (values.avatar || '') !== (userInfo?.avatar || '');

            if (!isChanged) {
              Alert.alert('There is no change to update');
              return;
            }

            if (values.avatar === '') {
              const result = await deleteUserAvatar();
              if (deleteUserAvatarAsyncAction.rejected.match(result)) {
                Alert.alert('Failed to delete avatar.');
              } else {
                showSuccesToast();
              }
            }

            if (
              values.username !== userInfo?.username ||
              (values.avatar && values.avatar !== userInfo?.avatar)
            ) {
              const result = await updateUserInfo(
                values.username,
                values.avatar && values.avatar !== userInfo?.avatar
                  ? values.avatar
                  : undefined,
              );

              if (updateUserInfoAsyncAction.rejected.match(result)) {
                Alert.alert('Failed to update info.');
              } else {
                showSuccesToast();
              }
            }
          }}
          validationSchema={validationSchemaUpdateUserInfo}
        >
          {({ handleSubmit, values, setFieldValue, errors }) => (
            <View style={styles.container}>
              <AvatarPicker
                values={values}
                pickPhoto={pickPhoto}
                setFieldValue={setFieldValue}
              />
              <View style={styles.bottomContainer}>
                <View style={styles.inputContainer}>
                  <AppInput
                    label="Email"
                    theme="dark"
                    defaultValue={userInfo?.email}
                    editable={false}
                  />
                  <AppInput
                    label="Name"
                    theme="dark"
                    value={values.username}
                    onChangeText={text => setFieldValue('username', text)}
                  />
                  {errors.username && <TextError error={errors.username} />}
                </View>
                <View style={styles.buttonContainer}>
                  <AppButton title="Update" onPress={() => handleSubmit()} />
                  <AppButton title="Logout" onPress={handleLogout} />
                </View>
              </View>
            </View>
          )}
        </Formik>
      )}
      <Toast />
    </View>
  );
};
export default CurrentUserScreen;
