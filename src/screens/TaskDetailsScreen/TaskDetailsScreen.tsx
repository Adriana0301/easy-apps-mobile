import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../../components/AppHeader/AppHeader';
import useTasks from '../../hooks/useTasks';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../interfaces/navigation/routeParams';

type TaskDetailsRouteProp = RouteProp<
  AppStackParamList,
  ERouteNames.TASK_DETAILS
>;

const TasksDetailsScreen = () => {
  const { currentTask, getTaskById } = useTasks();
  const route = useRoute<TaskDetailsRouteProp>();
  const { taskId } = route.params;
  console.log(currentTask);

  useEffect(() => {
    getTaskById(taskId);
  }, [taskId]);

  return (
    <View>
      <AppHeader label="Task Details" goBackAllowed={true} />
      <Text>{currentTask?.title}</Text>
      <Text>{currentTask?.description}</Text>
    </View>
  );
};
export default TasksDetailsScreen;
