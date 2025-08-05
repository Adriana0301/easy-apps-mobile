import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AppNavigationParams } from '../../interfaces/navigation/routeParams';
import styles from './AddButton.styles';

const AddButton = () => {
  const navigation = useNavigation<AppNavigationParams>();
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => navigation.navigate(ERouteNames.TASK_CREATOR)}
    >
      <Text style={styles.buttonText}>+ Add task</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
