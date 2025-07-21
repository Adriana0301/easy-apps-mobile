import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
};

export default App;
