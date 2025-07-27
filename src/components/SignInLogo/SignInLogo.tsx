import { Image, Text, View } from 'react-native';
import styles from '../SignInLogo/SignInLogo.styles';

const SignInLogo = () => {
  return (
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/images/Logo.png')}
          style={styles.img}
        />
        <Text style={styles.text}>Welcome!</Text>
      </View>
  );
};

export default SignInLogo;
