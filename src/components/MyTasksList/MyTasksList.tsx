import { FlatList, View } from 'react-native';
import useTasks from '../../hooks/useTasks';
import ActiveIndicator from '../ActiveIndicator/ActiveIndicator';
import NoTasksText from '../NoTasksText/NoTasksText';
import styles from './MyTasksList.styles';
import Item from './MyTasksListItem/MyTasksListItem';

const MyTasksList = () => {
  const { tasks, loading } = useTasks();
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
          keyExtractor={item => item.id.toString()}
          style={styles.list}
          initialNumToRender={1}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default MyTasksList;
