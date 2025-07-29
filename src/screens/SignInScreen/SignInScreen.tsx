import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { View } from 'react-native';
import AppButton from '../../components/AppButton/AppButton';
import AppInput from '../../components/AppInput/AppInput';
import SignInLogo from '../../components/SignInLogo/SignInLogo';
import TextError from '../../components/TextError/TextError';
import useAuth from '../../hooks/useAuth';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AuthNavigationParams } from '../../interfaces/navigation/routeParams';
import validationSchemaSignIn from '../../validation/validationSchemaSignIn';
import styles from './SignInScreen.style';

const SignInScreen = () => {
  const navigation = useNavigation<AuthNavigationParams>();
  const goToSignUp = () => {
    navigation.navigate(ERouteNames.SIGN_UP_SCREEN);
  };
  const {loading, signIn} = useAuth();

  return (
    <View style={styles.container}>
      <SignInLogo />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          signIn(values.email, values.password);

        }}
        validationSchema={validationSchemaSignIn}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <View style={styles.bottomContainer}>
            <View style={styles.inputButtonContainer}>
              <AppInput
                label="Email"
                keyboardType="email-address"
                placeholder="email"
                onChangeText={handleChange('email')}
              />
              {errors.email && <TextError error={errors.email} />}
              <AppInput
                label="Password"
                typeOfInput="password"
                onChangeText={handleChange('password')}
                placeholder="password"
              />
              {errors.password && <TextError error={errors.password} />}
            </View>
            <View style={styles.inputButtonContainer}>
              <AppButton isLoading={loading} onPress={() => handleSubmit()} title="Log in" />
              <AppButton onPress={goToSignUp} title="Go To Sign Up" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default SignInScreen;
