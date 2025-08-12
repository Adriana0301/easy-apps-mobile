import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.violet,
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 55,
    paddingBottom: 100,
  },
  bottomContainer: {
    width: '100%',
    gap: 49,
  },
  inputButtonContainer: {
    gap: 11,
  },
});

export default styles;
