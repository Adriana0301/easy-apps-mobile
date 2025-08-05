import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  textWrapper: {
    gap: 30,
  },
  text: {
    fontWeight: 400,
    fontSize: 14,
    color: Colors.lightGray,
  },
  bigText: {
    fontWeight: 700,
    fontSize: 24,
    width: 155,
    color: Colors.white,
  },
});
export default styles;
