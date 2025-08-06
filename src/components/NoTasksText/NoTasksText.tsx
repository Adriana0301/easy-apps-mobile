import { Text, View } from 'react-native';
import styles from './NoTasksText.styles';

const NoTasksText = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>There are no tasks at the moment</Text>
    </View>
  );
};
export default NoTasksText;
