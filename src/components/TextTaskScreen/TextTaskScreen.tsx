import { Text, View } from 'react-native';
import useTasks from '../../hooks/useTasks';
import styles from './TextTaskScreen.styles';

const TextTaskScreen = () => {
  const { total } = useTasks();
  return (
    <View style={styles.textWrapper}>
      <Text style={styles.text}>Hello there</Text>
      <Text style={styles.bigText}>You Have {total} tasks here</Text>
    </View>
  );
};
export default TextTaskScreen;
