import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.violet,
  },
  goBackButtonContainer: {
    zIndex: 1,
  },
  headerLabel: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: 700,
    position: 'absolute',
    top: 'auto',
    bottom: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  shouldDeleteText: {
    zIndex: 1,
    color: Colors.white,
    fontSize: 14,
    fontWeight: 700,
  },
});

export default styles;
