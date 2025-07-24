import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    borderRadius: 12,
    width: '100%',
    height: 56,
    justifyContent: 'center',
  },
  text: {
    fontWeight: 700,
    fontSize: 18,
  },
});

export default styles;
