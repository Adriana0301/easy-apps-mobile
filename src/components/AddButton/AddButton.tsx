import { Alert, Text, TouchableOpacity } from 'react-native';
import styles from './AddButton.styles';

const AddButton = () => {
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => {
        Alert.alert('Button pressed');
      }}
    >
      <Text style={styles.buttonText}>+ Add task</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
