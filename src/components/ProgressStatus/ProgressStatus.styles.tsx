import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  doneContainer: {
    borderRadius: 8,
    width: 70,
    height: 30,
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  progressContainer: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    width: 120,
    height: 30,
    backgroundColor: Colors.blue,
  },
  textDone: {
    color: Colors.white,
    fontWeight: 600,
    fontSize: 14,
  },
  textProgress: {
    color: Colors.white,
    fontWeight: 600,
    fontSize: 14,
  },
});

export default styles;
