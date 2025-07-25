import { SafeAreaView } from 'react-native-safe-area-context';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import styles from './SignUpScreen.styles';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SignUpForm />
    </SafeAreaView>
  );
};
export default SignUpScreen;
