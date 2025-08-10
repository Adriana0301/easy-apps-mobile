import { Formik } from 'formik';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import AppButton from '../../components/AppButton/AppButton';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppInput from '../../components/AppInput/AppInput';
import TaskAttachments from '../../components/TaskAttachments/TaskAttachments';
import TextError from '../../components/TextError/TextError';
import useTasks from '../../hooks/useTasks';
import validationSchemaAddTasks from '../../validation/validationSchemaAddTask';
import styles from './TaskCreatorScreen.styles';

const TaskCreatorScreen = () => {
  const [attachments, setAttachments] = React.useState<string[]>([]);

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

  const { createTask } = useTasks();

  return (
    <SafeAreaView style={styles.wrapper}>
      <AppHeader label="Add new task" goBackAllowed={true} />
      <Formik
        initialValues={{ title: '', description: '' }}
        validationSchema={validationSchemaAddTasks}
        onSubmit={value => {
          createTask(value.title, value.description, attachments);
        }}
      >
        {({ handleSubmit, setFieldValue, errors }) => (
          <View style={styles.container}>
            <View style={styles.inputs}>
              <AppInput
                label="Task title"
                onChangeText={text => setFieldValue('title', text)}
                theme="dark"
              />
              {errors.title && <TextError error={errors.title} />}
              <AppInput
                theme="dark"
                label="Task description"
                onChangeText={text => setFieldValue('description', text)}
              />
              {errors.description && <TextError error={errors.description} />}
              <TaskAttachments
                attachments={attachments}
                addAttachment={addAttachment}
                removeAttachment={removeAttachment}
              />
            </View>

            <AppButton
              title="Save"
              onPress={() => {
                handleSubmit();
              }}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default TaskCreatorScreen;
