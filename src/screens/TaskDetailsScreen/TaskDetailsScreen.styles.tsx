import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    paddingBottom: 60,
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 20,
    fontWeight: 600,
    fontSize: 22,
    marginBottom: 10,
  },
  description: {
    fontWeight: 400,
    fontSize: 18,
    width: '80%',
    marginBottom: 8,
  },
  gap: {
    gap: 14,
  },
  wrapperButtons: {
    flexDirection: 'row',
    justifyContent: 'center',

    gap: 12,
  },
  button: {},
  wrapperButton: {
    width: 145,
  },
});

export default styles;
