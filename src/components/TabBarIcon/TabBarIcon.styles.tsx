import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
  },
  selectedContainer: {
    backgroundColor: Colors.violet,
  },
});

export default styles;
