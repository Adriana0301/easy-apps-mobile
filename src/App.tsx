import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppNavigation from './components/AppNavigation/AppNavigation';
import store from './redux/store';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
