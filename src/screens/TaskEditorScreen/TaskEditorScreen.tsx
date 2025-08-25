import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
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
import {
  deleteFileAsyncAction,
  deleteTaskAsyncAction,
  editTaskAsyncAction,
} from '../../redux/actions/tasksActions';
import { TAppDispatch } from '../../redux/store';
import validationSchemaAddTasks from '../../validation/validationSchemaAddTask';
import styles from './TaskEditorScreen.styles';

type TaskEditRouteProp = RouteProp<AppStackParamList, ERouteNames.TASK_EDITOR>;

const TaskEditorScreen = () => {
  const navigation = useNavigation();
  const [attachments, setAttachments] = React.useState<string[]>([]);
  const { loading, getTaskById, currentTask, editTask, deleteFile } =
    useTasks();
  const { taskId } = useRoute<TaskEditRouteProp>().params;
  const dispatch = useDispatch<TAppDispatch>();
  const [initialFiles, setInitialFiles] = React.useState<string[]>([]);

  useEffect(() => {
    getTaskById(taskId);
  }, [taskId]);

  useEffect(() => {
    if (currentTask?.files) {
      const parsed = JSON.parse(currentTask.files.toString());
      setAttachments(parsed);
      setInitialFiles(parsed);
    }
  }, [currentTask]);

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
          enableReinitialize
          validationSchema={validationSchemaAddTasks}
          onSubmit={async values => {
            const deletedFiles = initialFiles.filter(
              (file: string) => !attachments.includes(file),
            );
            console.log(deletedFiles);

            const isChanged =
              currentTask?.title !== values.title ||
              (currentTask?.description ?? '').trim() !==
                values.description.trim() ||
              currentTask?.done !== values.status ||
              JSON.stringify(initialFiles) !== JSON.stringify(attachments);

            if (!isChanged) {
              Alert.alert('There is no change to update');
              return;
            }

            if (deletedFiles.length > 0) {
              for (const file of deletedFiles) {
                const result = await deleteFile(taskId, file);
                if (!deleteFileAsyncAction.rejected.match(result)) {
                  setAttachments(prev => prev.filter(f => f !== file));
                } else {
                  Alert.alert('Failed to delete some files.');
                }
              }
            }

            const descriptionToSend =
              (currentTask?.description ?? '').trim() !==
              values.description.trim()
                ? values.description.trim()
                : undefined;

            if (
              currentTask?.title !== values.title ||
              (currentTask?.description ?? '').trim() !==
                values.description.trim() ||
              currentTask?.done !== values.status ||
              (JSON.stringify(initialFiles) !== JSON.stringify(attachments) &&
                deletedFiles.length === 0)
            ) {
              const result = await editTask(
                taskId,
                values.status,
                values.title,
                descriptionToSend,
                attachments,
              );
              if (!editTaskAsyncAction.rejected.match(result)) {
                goToPreviousScreen();
              } else {
                Alert.alert('Failed to update task.');
              }
            }
          }}
        >
          {({ handleSubmit, setFieldValue, values, errors }) => (
            <View style={styles.container}>
              <View style={styles.inputs}>
                <AppInput
                  label="Task title"
                  value={values.title}
                  onChangeText={text => setFieldValue('title', text)}
                  theme="dark"
                />
                {errors.title && <TextError error={errors.title} />}
                <AppInput
                  theme="dark"
                  label="Task description"
                  value={values.description}
                  onChangeText={text => setFieldValue('description', text)}
                />
                {errors.description && <TextError error={errors.description} />}
                <View style={styles.checkboxWrapper}>
                  <CheckItem
                    done={values.status}
                    label="Done"
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
      <Toast />
    </SafeAreaView>
  );
};
export default TaskEditorScreen;
