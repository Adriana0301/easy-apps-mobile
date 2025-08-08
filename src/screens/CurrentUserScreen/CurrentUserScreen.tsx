import { Formik } from 'formik';
import { useEffect } from 'react';
import { Alert, View } from 'react-native';
import ActiveIndicator from '../../components/ActiveIndicator/ActiveIndicator';
import AppButton from '../../components/AppButton/AppButton';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppInput from '../../components/AppInput/AppInput';
import AvatarPicker from '../../components/AvatarPicker/AvatarPicker';
import useGallery from '../../hooks/useGallery';
import useUserInfo from '../../hooks/useUserInfo';
import styles from './CurrentUserScreen.styles';

const CurrentUserScreen = () => {
  const { pickPhoto } = useGallery();
  const { userInfo, loading, getUserInfo } = useUserInfo();

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <AppHeader label="Profile" />
      {loading ? (
        <ActiveIndicator size={60} />
      ) : (
        <Formik
          initialValues={{
            avatar: userInfo?.avatar || '',
            username: userInfo?.username || '',
          }}
          onSubmit={values => {
            Alert.alert('Profile');
          }}
        >
          {({ handleSubmit, values, setFieldValue }) => (
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
                    defaultValue={userInfo?.username}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <AppButton title="Update" onPress={() => handleSubmit()} />
                  <AppButton title="Logout" onPress={() => handleSubmit()} />
                </View>
              </View>
            </View>
          )}
        </Formik>
      )}
    </View>
  );
};
export default CurrentUserScreen;
