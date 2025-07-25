import { Image, Text, View } from 'react-native';
import SginInForm from '../SginInForm/SignInForm';
import styles from '../SignIn/SignIn.styles';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/images/Logo.png')}
          style={styles.img}
        />
        <Text style={styles.text}>Welcome!</Text>
      </View>
      <SginInForm />
    </View>
  );
};

export default SignIn;
