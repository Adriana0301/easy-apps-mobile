import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 26,
    justifyContent: 'space-between',
  },
  inputs: {
    gap: 18,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default styles;
