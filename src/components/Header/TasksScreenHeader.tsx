import { View } from 'react-native';
import AddButton from '../AddButton/AddButton';
import TextTaskScreen from '../TextTaskScreen/TextTaskScreen';
import styles from './TasksScreenHeader.styles';

const TasksScreenHeader = () => {
  return (
    <View style={styles.container}>
      <TextTaskScreen />
      <AddButton />
    </View>
  );
};
export default TasksScreenHeader;
