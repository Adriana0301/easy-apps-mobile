import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CheckActiveIcon from '../../assets/icons/CheckActiveIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
import styles from './CheckItem.styles';

type CheckProps = {
  title: string;
};
const CheckItem = ({ title }: CheckProps) => {
  const [done, setDone] = useState(false); // when we have request for update tasks,
  // we will change 'done' in backend
  const toggleDone = () => {
    setDone(prev => !prev);
  };
  return (
    <TouchableOpacity onPress={toggleDone}>
      {done ? (
        <View style={styles.container}>
          <CheckActiveIcon />
          <Text style={styles.changedText}>{title}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <CheckIcon />
          <Text>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CheckItem;
