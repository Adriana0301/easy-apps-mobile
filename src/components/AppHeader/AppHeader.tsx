import { Text, TouchableOpacity, View } from 'react-native';
import GoBackButton from '../../assets/icons/GoBack';
import styles from './AppHeader.styles';

type AppHeaderProps = {
  label: string;
  goBackAllowed?: boolean;
  onDelete?: () => void;
};

const AppHeader: React.FC<AppHeaderProps> = ({
  label,
  goBackAllowed,
  onDelete,
}) => {
  return (
    <View style={styles.header}>
      {goBackAllowed ? (
        <View style={styles.goBackButtonContainer}>
          <GoBackButton />
        </View>
      ) : (
        <View />
      )}
      <Text style={styles.headerLabel}>{label}</Text>
      {onDelete ? (
        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.shouldDeleteText}>delete</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default AppHeader;
