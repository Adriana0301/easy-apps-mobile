import { FlatList, View } from 'react-native';
import AddAttachmentButton from './AddAttachmentButton/AddAttachmentButton';
import styles from './TaskAttachments.styles';
import TasksAttachmentsItem from './TaskAttachmentsItem/TaskAttachmentsItem';

type TaskAttachmentsProps = {
  attachments: string[];
  addAttachment: (attachment: string) => void;
  removeAttachment: (attachmentToDelete: string) => void;
};

const TaskAttachments = ({
  attachments,
  addAttachment,
  removeAttachment,
}: TaskAttachmentsProps) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <AddAttachmentButton addAttachment={addAttachment} />
      )}
      data={attachments}
      ItemSeparatorComponent={() => <View style={styles.gap} />}
      renderItem={({ item }) => (
        <TasksAttachmentsItem
          attachment={item}
          removeAttachment={removeAttachment}
        />
      )}
    />
  );
};
export default TaskAttachments;
