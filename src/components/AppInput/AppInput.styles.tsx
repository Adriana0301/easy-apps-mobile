import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  input: {
    color: Colors.lightViolet,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 12,
    marginTop: 6,
    padding: 13,
    width: '100%',
  },
  text: {
    color: Colors.lightViolet,
  },
  isVisiblePassword: {
    position: 'absolute',
    right: 10,
    top: 37,
    zIndex: 1,
  },
});

export default styles;
