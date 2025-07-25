import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { Text, View } from 'react-native';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AuthNavigationParams } from '../../interfaces/navigation/routeParams';
import validationSchema from '../../validation/validationSchemaSignUp';
import AppButton from '../AppButton/AppButton';
import AppInput from '../AppInput/AppInput';
import styles from './SignInForm.styles';

const SginInForm = () => {
  const navigation = useNavigation<AuthNavigationParams>();
  const goToSignUp = () => {
    navigation.navigate(ERouteNames.SIGN_UP_SCREEN);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, errors }) => (
        <View style={styles.bottomContainer}>
          <View style={styles.inputButtonContainer}>
            <AppInput
              label="Email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <AppInput
              label="Password"
              typeOfInput="password"
              onChangeText={handleChange('password')}
              placeholder="password123"
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>
          <View style={styles.inputButtonContainer}>
            <AppButton onPress={() => handleSubmit()} title="Log in" />
            <AppButton onPress={goToSignUp} title="Go To Sign Up" />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SginInForm;
