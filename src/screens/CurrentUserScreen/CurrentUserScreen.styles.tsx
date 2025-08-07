import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    paddingTop: '34%',
 },
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 16,
    flex: 1,
    justifyContent: 'space-around',
  },
  bottomContainer:{
    justifyContent: 'space-around',
    flex: 1,
  },
  inputContainer:{
    gap: 17,
  },
  buttonContainer: {
    gap: 14,
  },
});

export default styles;
