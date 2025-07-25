import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    paddingBottom: 36,
    justifyContent: 'space-between',
    height: '100%',
  },

  inputsContainer: {
    gap: 9,
    marginBottom: 29,
  },
  buttonContainer: {
    gap: 11,
  },
  error: {
    color: Colors.yellow,
  },
});
export default styles;
