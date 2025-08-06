import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  list: {
    height: Platform.OS === 'ios' ? 515 : 580,
    overflow: 'hidden',
  },
});
export default styles;
