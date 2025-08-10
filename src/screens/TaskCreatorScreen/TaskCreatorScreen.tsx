import { Formik } from 'formik';
import { SafeAreaView, View } from 'react-native';
import AppButton from '../../components/AppButton/AppButton';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppInput from '../../components/AppInput/AppInput';
import TextError from '../../components/TextError/TextError';
import useTasks from '../../hooks/useTasks';
import validationSchemaAddTasks from '../../validation/validationSchemaAddTask';
import styles from './TaskCreatorScreen.styles';

const TaskCreatorScreen = () => {
  const { createTask } = useTasks();
  return (
    <SafeAreaView style={styles.wrapper}>
      <AppHeader label="Add new task" goBackAllowed={true} />
      <Formik
        initialValues={{ title: '', description: '', files: [] }}
        validationSchema={validationSchemaAddTasks}
        onSubmit={value => {
          console.log(123);
          createTask(value.title, value.description, value.files);
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
            </View>
            <AppButton
              title="Save"
              onPress={() => {
                console.log('Save');
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
