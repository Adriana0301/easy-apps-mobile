import { SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppNavigation from './components/AppNavigation/AppNavigation';
import store from './redux/store';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaProvider style={styles.container}>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
