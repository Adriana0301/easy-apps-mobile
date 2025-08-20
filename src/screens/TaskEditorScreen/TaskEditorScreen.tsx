import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import ActiveIndicator from '../../components/ActiveIndicator/ActiveIndicator';
import AppButton from '../../components/AppButton/AppButton';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppInput from '../../components/AppInput/AppInput';
import CheckItem from '../../components/CheckItem/CheckItem';
import TaskAttachments from '../../components/TaskAttachments/TaskAttachments';
import TextError from '../../components/TextError/TextError';
import useTasks from '../../hooks/useTasks';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../interfaces/navigation/routeParams';
import { deleteTaskAsyncAction } from '../../redux/actions/tasksActions';
import { TAppDispatch } from '../../redux/store';
import validationSchemaAddTasks from '../../validation/validationSchemaAddTask';
import styles from './TaskEditorScreen.styles';

type TaskEditRouteProp = RouteProp<AppStackParamList, ERouteNames.TASK_EDITOR>;

const TaskCreatorScreen = () => {
  const navigation = useNavigation();
  const [attachments, setAttachments] = React.useState<string[]>([]);
  const { loading, getTaskById, currentTask } = useTasks();
  const { taskId } = useRoute<TaskEditRouteProp>().params;
  const dispatch = useDispatch<TAppDispatch>();

  const filesArray = currentTask?.files
    ? JSON.parse(currentTask.files.toString())
    : [];

  useEffect(() => {
    getTaskById(taskId);
    // should better make it async ?
    setAttachments(filesArray);
  }, [taskId]);

  const addAttachment = React.useCallback(
    (newAttachment: string) => {
      setAttachments([...attachments, newAttachment]);
    },
    [attachments],
  );

  const removeAttachment = React.useCallback(
    (attachmentToDelete: string) => {
      setAttachments(
        attachments.filter(
          (attachment: string) => attachment !== attachmentToDelete,
        ),
      );
    },
    [attachments],
  );

  const goToPreviousScreen = React.useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);

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
    <SafeAreaView style={styles.wrapper}>
      <AppHeader
        label="Edit task"
        goBackAllowed={true}
        onDelete={deleteTaskButton}
      />
      {loading ? (
        <ActiveIndicator />
      ) : (
        <Formik
          initialValues={{
            title: currentTask?.title || '',
            description: currentTask?.description || '',
            status: currentTask?.done || false,
          }}
          validationSchema={validationSchemaAddTasks}
          onSubmit={value => {
            // createTask(
            //   value.title,
            //   value?.description,
            //   attachments,
            //   goToMyTasksScreen,
            // );

            console.log('edited: ', value);
          }}
        >
          {({ handleSubmit, setFieldValue, errors }) => (
            <View style={styles.container}>
              <View style={styles.inputs}>
                <AppInput
                  label="Task title"
                  value={currentTask?.title}
                  onChangeText={text => setFieldValue('title', text)}
                  theme="dark"
                />
                {errors.title && <TextError error={errors.title} />}
                <AppInput
                  theme="dark"
                  label="Task description"
                  value={currentTask?.description}
                  onChangeText={text => setFieldValue('description', text)}
                />
                {errors.description && <TextError error={errors.description} />}
                <View style={styles.checkboxWrapper}>
                  <CheckItem
                    label="Done "
                    onChange={isDone => setFieldValue('status', isDone)}
                  />
                </View>
                <TaskAttachments
                  attachments={attachments}
                  addAttachment={addAttachment}
                  removeAttachment={removeAttachment}
                />
              </View>
              <AppButton
                isLoading={loading}
                title="Save"
                onPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          )}
        </Formik>
      )}
    </SafeAreaView>
  );
};
export default TaskCreatorScreen;
