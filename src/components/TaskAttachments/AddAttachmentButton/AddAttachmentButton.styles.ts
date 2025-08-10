import { StyleSheet } from 'react-native';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    width: 82,
    height: 82,
    borderRadius: 8,
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
