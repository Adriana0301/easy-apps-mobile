import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 6,
    padding: 13,
    width: '100%',
  },
  inputColor: {
    color: Colors.lightViolet,
    borderColor: Colors.white,
  },
  inputColorDark: {
    color: Colors.black,
    borderColor: Colors.gray,
  },
  text: {
    color: Colors.lightViolet,
  },
  textDark: {
    color: Colors.gray,
  },
  isVisiblePassword: {
    position: 'absolute',
    right: 10,
    top: 37,
    zIndex: 1,
  },
});

export default styles;
