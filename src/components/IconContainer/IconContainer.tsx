import { View } from 'react-native';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import EditIcon from '../../assets/icons/EditIcon';
import IconButton from '../IconButton/IconButton';
import styles from './IconContainer.styles';

const IconContainer = ({
  onPickPhoto,
  onDeletePhoto,
}: {
  onPickPhoto: () => void;
  onDeletePhoto: () => void;
}) => {
  return (
    <View style={styles.container}>
      <IconButton onPress={onDeletePhoto} Icon={DeleteIcon} />
      <IconButton onPress={onPickPhoto} Icon={EditIcon} />
    </View>
  );
};

export default IconContainer;
