import { useEffect } from 'react';
import { View } from 'react-native';
import TasksScreenHeader from '../../components/Header/TasksScreenHeader';
import MyTasksList from '../../components/MyTasksList/MyTasksList';
import useTasks from '../../hooks/useTasks';
import styles from './TasksScreen.styles';

const TasksScreen = () => {
  const { tasks, getAllTasks } = useTasks();

  useEffect(() => {
    if (!tasks.length) {
      getAllTasks();
    }
  }, [tasks.length]);

  return (
    <View style={styles.container}>
      <TasksScreenHeader />
      <View style={styles.tasksWrapper}>
        <MyTasksList />
      </View>
    </View>
  );
};
export default TasksScreen;
