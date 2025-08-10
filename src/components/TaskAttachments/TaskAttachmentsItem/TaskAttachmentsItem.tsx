import { Image, View } from 'react-native';
import DeleteIcon from '../../../assets/icons/DeleteIcon';
import IconButton from '../../IconButton/IconButton';
import styles from './TaskAttachmentsItem.styles';

type TasksAttachmentsItemProps = {
  attachment: string;
  removeAttachment: (attachmentToDelete: string) => void;
};

const TasksAttachmentsItem = ({
  attachment,
  removeAttachment,
}: TasksAttachmentsItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: attachment }} />
      <View style={styles.deleteIconContainer}>
        <IconButton
          onPress={() => removeAttachment(attachment)}
          Icon={DeleteIcon}
        />
      </View>
    </View>
  );
};

export default TasksAttachmentsItem;
