import { FlatList, View } from 'react-native';
import ActiveIndicator from '../ActiveIndicator/ActiveIndicator';
import NoTasksText from '../NoTasksText/NoTasksText';
import styles from './MyTasksList.styles';
import Item from './MyTasksListItem/MyTasksListItem';
import tasks from './tasks';
// import useTasks from '../../hooks/useTasks';

const MyTasksList = () => {
  // const {loading, tasks, } = useTasks();
  const loading = false;
  if (loading) {
    return <ActiveIndicator />;
  }

  return (
    <View style={styles.container}>
      {tasks.length === 0 ? (
        <NoTasksText />
      ) : (
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Item id={item.id} title={item.title} done={item.done} />
          )}
          keyExtractor={item => item.id}
          style={styles.list}
          getItemLayout={(data, index) => ({
            length: 60,
            offset: 60 * index,
            index,
          })}
        />
      )}
    </View>
  );
};

export default MyTasksList;
