import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { Text, View } from 'react-native';
import useGallery from '../../hooks/useGallery';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AuthNavigationProps } from '../../interfaces/navigation/routeParams';
import validationSchemaSignUp from '../../validation/validationSchemaSignUp';
import AppButton from '../AppButton/AppButton';
import AppInput from '../AppInput/AppInput';
import ImageContainer from '../ImageContainer/ImageContainer';
import styles from './SignUpForm.styles';

const SignUpForm = () => {
  const { pickPhoto } = useGallery();
  const navigation = useNavigation<AuthNavigationProps>();

  return (
    <Formik
      initialValues={{
        avatar: '',
        email: '',
        name: '',
        password: '',
        repeatPassword: '',
      }}
      validationSchema={validationSchemaSignUp}
      onSubmit={() => console.log('Form submitted')}
    >
      {({ values, setFieldValue, errors }) => (
        <View style={styles.container}>
          <View>
            <ImageContainer
              values={values}
              pickPhoto={pickPhoto}
              setFieldValue={setFieldValue}
            />
            <View style={styles.inputsContainer}>
              <AppInput
                label="Email"
                onChangeText={text => setFieldValue('email', text)}
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
              <AppInput
                label="Name"
                onChangeText={text => setFieldValue('name', text)}
              />
              {errors.name && <Text style={styles.error}>{errors.name}</Text>}
              <AppInput
                label="Password "
                placeholder="password123"
                typeOfInput="password"
                onChangeText={text => setFieldValue('password', text)}
              />
              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <AppInput
                label="Repeat password "
                placeholder="password123"
                typeOfInput="password"
                onChangeText={text => setFieldValue('repeatPassword', text)}
              />
              {errors.repeatPassword && (
                <Text style={styles.error}>{errors.repeatPassword}</Text>
              )}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton title="Sign up" onPress={() => console.log(values)} />
            <AppButton
              title="Go To Sign In"
              onPress={() => navigation.navigate(ERouteNames.SIGN_IN_SCREEN)}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
export default SignUpForm;
