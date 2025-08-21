import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    marginRight: 20,
    marginLeft: 20,
  },
  header: {
    marginBottom: 20,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.black,
  },
});
export default styles;
