import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { Image, View } from 'react-native';
import useGallery from '../../hooks/useGallery';
import validationSchemaSignUp from '../../validation/validationSchemaSignUp';
import AppButton from '../AppButton/AppButton';
import AppInput from '../AppInput/AppInput';
import IconContainer from '../IconContainer/IconContainer';
import styles from './SignUpForm.styles';

const SignUpForm = () => {
  const { photo, pickPhoto } = useGallery();
  const navigation = useNavigation();

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
      {({ values, setFieldValue }) => (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            {!values.avatar ? (
              <Image
                style={styles.image}
                source={require('../../assets/images/default-avatar.jpg')}
              />
            ) : (
              <Image style={styles.image} source={{ uri: values.avatar }} />
            )}
            <IconContainer
              onPickPhoto={async () => {
                const result = await pickPhoto();
                if (result) {
                  setFieldValue('avatar', result);
                }
              }}
              onDeletePhoto={() => setFieldValue('avatar', '')}
            />
          </View>
          <View style={styles.inputsContainer}>
            <AppInput
              label="Email"
              onChangeText={text => setFieldValue('email', text)}
            />
            <AppInput label="Name" />
            <AppInput
              label="Password "
              placeholder="password123"
              typeOfInput="password"
            />
            <AppInput
              label="Repeat password "
              placeholder="password123"
              typeOfInput="password"
            />
          </View>
          <View style={styles.buttonContainer}>
            <AppButton title="Sign up" onPress={() => console.log(values)} />
            <AppButton
              title="Go To Sign In"
              onPress={() => navigation.navigate('SignInScreen')}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
export default SignUpForm;
