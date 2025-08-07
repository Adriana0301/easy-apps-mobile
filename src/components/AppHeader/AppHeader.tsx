import { Alert, Text, View } from 'react-native';
import GoBackButton from '../../assets/icons/GoBack';
import styles from './AppHeader.styles';

type AppHeaderProps = {
  label: string;
  goBackAllowed?: boolean;
  shouldDelete?: boolean;
};

const AppHeader: React.FC<AppHeaderProps> = ({
  label,
  goBackAllowed,
  shouldDelete,
}) => {
  return (
    <View style={styles.header}>
      {goBackAllowed && <GoBackButton />}
      <Text style={styles.headerLabel}>{label}</Text>
      {shouldDelete && (
        <Text
          onPress={() => Alert.alert('deleted')}
          style={styles.shouldDeleteText}
        >
          delete
        </Text>
      )}
    </View>
  );
};

export default AppHeader;
