import { FlatList } from 'react-native';
import styles from './MyTasksList.styles';
import Item from './MyTasksListItem/MyTasksListItem';

const tasks = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Task 1',
    description: 'Go to school',
    done: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Task 2',
    description: 'Go home',
    done: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Task 3',
    description: 'Go to shop',
    done: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-945571e29d72',
    title: 'Task 4',
    description: 'Go to hospital',
    done: false,
  },
];

const MyTasksList = () => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

export default MyTasksList;
