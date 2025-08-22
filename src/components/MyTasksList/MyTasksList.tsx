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
            <Item _id={item._id} title={item.title} done={item.done} />
          )}
          keyExtractor={(item, index) => `${item._id}${index}`}
          style={styles.list}
          initialNumToRender={1}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default MyTasksList;
