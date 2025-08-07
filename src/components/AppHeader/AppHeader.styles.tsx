import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.violet,
    width: '100%',
    height: 100,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  },
  headerLabel: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: 700,
    position: 'absolute',
    left: '44.6%',
  },
  shouldDeleteText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 700,
    position: 'absolute',
    right: 16,
  },
});

export default styles;
