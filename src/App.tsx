import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppNavigation from './components/AppNavigation/AppNavigation';
import store from './redux/store';
import Colors from './theme/colors';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView style={styles.container} edges={['top']}>
          <AppNavigation />
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.violet,
  },
});

export default App;
