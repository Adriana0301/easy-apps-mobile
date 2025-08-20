import { Text, TouchableOpacity, View } from 'react-native';
import CheckActiveIcon from '../../assets/icons/CheckActiveIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
import useTasks from '../../hooks/useTasks';
import styles from './CheckItem.styles';

type CheckProps = {
  title: string;
  id: number;
  done: boolean;
};
const CheckItem = ({ title, id, done }: CheckProps) => {
  const { changeTaskStatus } = useTasks();
  const toggleDone = () => {
    changeTaskStatus(id, !done);
  };
  return (
    <TouchableOpacity onPress={toggleDone}>
      {done ? (
        <View style={styles.container}>
          <CheckActiveIcon />
          <Text style={styles.changedText}>
            {title.slice(0, 30) + (title.length > 30 ? '...' : '')}
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <CheckIcon />
          <Text> {title.slice(0, 30) + (title.length > 30 ? '...' : '')}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CheckItem;
