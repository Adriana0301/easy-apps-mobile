import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: Colors.violet,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
});

export default styles;
