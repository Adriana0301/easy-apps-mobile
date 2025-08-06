import { FlatList, View } from 'react-native';
import NoTasksText from '../NoTasksText/NoTasksText';
import styles from './MyTasksList.styles';
import Item from './MyTasksListItem/MyTasksListItem';
import tasks from './tasks';

const MyTasksList = () => {
  return (
    <View style={styles.container}>
      {!tasks.length ? (
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
