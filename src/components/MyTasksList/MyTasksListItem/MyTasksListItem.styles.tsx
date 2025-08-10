import { StyleSheet } from 'react-native';
import Colors from '../../../theme/colors';

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    width: 'auto',
    height: 46,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 12,
    paddingLeft: 12,
  },
  title: {},
  iconsWrapper: {
    flexDirection: 'row',
    gap: 12,
  },
});
export default styles;
