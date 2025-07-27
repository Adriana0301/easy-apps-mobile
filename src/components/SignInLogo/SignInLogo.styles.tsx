import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
    gap: 14,
  },
  img: {
    height: 88,
    resizeMode: 'contain',
  },
  text: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default styles;
