import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CheckActiveIcon from '../../assets/icons/CheckActiveIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
import styles from './CheckItem.styles';

const CheckItem = () => {
  const [done, setDone] = useState(false);

  const toggleDone = () => {
    setDone(prev => !prev);
  };
  return (
    <TouchableOpacity onPress={toggleDone}>
      {done ? (
        <View style={styles.container}>
          <CheckActiveIcon />
          <Text style={styles.changedText}>Text</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <CheckIcon />
          <Text>Text</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CheckItem;
