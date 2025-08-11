import { Text, View } from 'react-native';
import styles from './ProgressStatus.styles';

const ProgressStatus = (done: boolean) => {
  return (
    <View>
      {!done ? (
        <View style={styles.doneContainer}>
          <Text style={styles.textDone}>Done</Text>
        </View>
      ) : (
        <View style={styles.progressContainer}>
          <Text style={styles.textProgress}>IN PROGRESS</Text>
        </View>
      )}
    </View>
  );
};

export default ProgressStatus;
