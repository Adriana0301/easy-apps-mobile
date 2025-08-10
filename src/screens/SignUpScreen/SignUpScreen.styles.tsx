import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: Colors.violet,
    height: '100%',
  },
  wrapper: {
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
