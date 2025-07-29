import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../components/AppButton/AppButton';
import AppInput from '../../components/AppInput/AppInput';
import AvatarPicker from '../../components/AvatarPicker/AvatarPicker';
import TextError from '../../components/TextError/TextError';
import useAuth from '../../hooks/useAuth';
import useGallery from '../../hooks/useGallery';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AuthNavigationParams } from '../../interfaces/navigation/routeParams';
import validationSchemaSignUp from '../../validation/validationSchemaSignUp';
import styles from './SignUpScreen.styles';

const SignUpScreen = () => {
  const { pickPhoto } = useGallery();
  const navigation = useNavigation<AuthNavigationParams>();
  const { loading, signUp } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          avatar: '',
          email: '',
          name: '',
          password: '',
          repeatPassword: '',
        }}
        validationSchema={validationSchemaSignUp}
        onSubmit={values =>
          signUp(values.email, values.name, values.password, values.avatar)
        }
      >
        {({ handleSubmit, values, setFieldValue, errors }) => (
          <View style={styles.wrapper}>
            <View>
              <AvatarPicker
                values={values}
                pickPhoto={pickPhoto}
                setFieldValue={setFieldValue}
              />
              <View style={styles.inputsContainer}>
                <AppInput
                  label="Email"
                  onChangeText={text => setFieldValue('email', text)}
                />
                {errors.email && <TextError error={errors.email} />}
                <AppInput
                  label="Name"
                  onChangeText={text => setFieldValue('name', text)}
                />
                {errors.name && <TextError error={errors.name} />}
                <AppInput
                  label="Password "
                  placeholder="password123"
                  typeOfInput="password"
                  onChangeText={text => setFieldValue('password', text)}
                />
                {errors.password && <TextError error={errors.password} />}
                <AppInput
                  label="Repeat password "
                  placeholder="password123"
                  typeOfInput="password"
                  onChangeText={text => setFieldValue('repeatPassword', text)}
                />
                {errors.repeatPassword && (
                  <TextError error={errors.repeatPassword} />
                )}
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                title="Sign up"
                isLoading={loading}
                onPress={() => handleSubmit()}
              />
              <AppButton
                title="Go To Sign In"
                onPress={() => navigation.navigate(ERouteNames.SIGN_IN_SCREEN)}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default SignUpScreen;
