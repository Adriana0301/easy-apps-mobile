import { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import ActiveIndicator from '../../components/ActiveIndicator/ActiveIndicator';
import AppHeader from '../../components/AppHeader/AppHeader';
import CommonTasksItem from '../../components/CommonTasksItem/CommonTasksItem';
import useTasks from '../../hooks/useTasks';
import styles from './CommonTasksScreen.styles';

const CommonTasksScreen = () => {
  const { tasks, getAllTasks, loading } = useTasks();
  useEffect(() => {
    if (!tasks.length) {
      getAllTasks();
    }
  }, []);

  if (loading) {
    return <ActiveIndicator />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppHeader label="Common Tasks" />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <CommonTasksItem title={item.title} />}
        keyExtractor={item => item.id.toString()}
        style={styles.flatList}
      />
    </View>
  );
};
export default CommonTasksScreen;
