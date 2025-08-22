import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CheckActiveIcon from '../../assets/icons/CheckActiveIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
import useTasks from '../../hooks/useTasks';
import styles from './CheckItem.styles';

type CheckProps = {
  title?: string;
  isDone?: boolean;
  id?: number;
  done: boolean;
  label?: string;
  onChange?: (isDone: boolean) => void;
};
const CheckItem = ({ title, id, done, label, onChange }: CheckProps) => {
  const { changeTaskStatus } = useTasks();
  const [isDone, setIsDone] = useState(done);

  const toggleDone = () => {
    id && changeTaskStatus(id, !done);
    setIsDone(!done);
    onChange?.(!done);
  };
  return (
    <TouchableOpacity onPress={toggleDone}>
      {done ? (
        <View style={styles.container}>
          {label && <Text>{label}</Text>}
          <CheckActiveIcon />
          {title && (
            <Text style={styles.changedText}>
              {title.slice(0, 30) + (title.length > 30 ? '...' : '')}
            </Text>
          )}
        </View>
      ) : (
        <View style={styles.container}>
          {label && <Text>{label}</Text>}
          <CheckIcon />
          {title && (
            <Text>
              {' '}
              {title.slice(0, 30) + (title.length > 30 ? '...' : '')}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CheckItem;
