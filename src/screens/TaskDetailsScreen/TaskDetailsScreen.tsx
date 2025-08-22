import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { Alert, FlatList, SafeAreaView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import ActiveIndicator from '../../components/ActiveIndicator/ActiveIndicator';
import AppButton from '../../components/AppButton/AppButton';
import AppHeader from '../../components/AppHeader/AppHeader';
import DetailsTaskAttachmentsItem from '../../components/DetailsTaskAttachmentsItem/DetailsTaskAttachmentsItem';
import ProgressStatus from '../../components/ProgressStatus/ProgressStatus';
import useTasks from '../../hooks/useTasks';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import {
  AppNavigationParams,
  AppStackParamList,
} from '../../interfaces/navigation/routeParams';
import { deleteTaskAsyncAction } from '../../redux/actions/tasksActions';
import { TAppDispatch } from '../../redux/store';
import styles from './TaskDetailsScreen.styles';

type TaskDetailsRouteProp = RouteProp<
  AppStackParamList,
  ERouteNames.TASK_DETAILS
>;

const TasksDetailsScreen = () => {
  const { currentTask, getTaskById, loading } = useTasks();
  const route = useRoute<TaskDetailsRouteProp>();
  const dispatch = useDispatch<TAppDispatch>();
  const navigation = useNavigation<AppNavigationParams>();
  const { taskId } = route.params;

  const filesArray = currentTask?.files
    ? JSON.parse(currentTask.files.toString())
    : [];

  useEffect(() => {
    getTaskById(taskId);
  }, [taskId]);

  const deleteTaskAndGoBack = () => {
    dispatch(deleteTaskAsyncAction(taskId));
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  const deleteTaskButton = () =>
    Alert.alert('Are you sure?', '', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Yes',
        onPress: () => deleteTaskAndGoBack(),
      },
    ]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader label="Task Details" goBackAllowed={true} />
      {loading ? (
        <ActiveIndicator />
      ) : (
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>{currentTask?.title}</Text>
            {currentTask?.description && (
              <Text style={styles.description}>{currentTask?.description}</Text>
            )}
            <ProgressStatus done={Boolean(currentTask?.done)} />
            <FlatList
              data={filesArray}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              renderItem={({ item }) => (
                <DetailsTaskAttachmentsItem item={item} />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.wrapperButtons}>
            <View style={styles.wrapperButton}>
              <AppButton
                isLoading={loading}
                title={'Delete'}
                style={styles.button}
                onPress={() => {
                  deleteTaskButton();
                }}
              />
            </View>
            <View style={styles.wrapperButton}>
              <AppButton
                title={'Edit'}
                style={styles.button}
                onPress={() =>
                  navigation.navigate(ERouteNames.TASK_EDITOR, {
                    taskId: taskId,
                  })
                }
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default TasksDetailsScreen;
