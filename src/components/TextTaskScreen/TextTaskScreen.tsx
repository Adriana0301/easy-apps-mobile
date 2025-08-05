import { Text, View } from 'react-native';
import styles from './TextTaskScreen.styles';

const TextTaskScreen = () => {
  return (
    <View style={styles.textWrapper}>
      <Text style={styles.text}>Hello there</Text>
      <Text style={styles.bigText}>You Have 2 tasks here</Text>
    </View>
  );
};
export default TextTaskScreen;
