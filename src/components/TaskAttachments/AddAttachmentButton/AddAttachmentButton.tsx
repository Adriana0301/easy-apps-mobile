import { Text, TouchableOpacity } from 'react-native';
import useGallery from '../../../hooks/useGallery';
import styles from './AddAttachmentButton.styles';

type AddAttachmentButtonProps = {
  addAttachment: (attachment: string) => void;
};

const AddAttachmentButton = ({ addAttachment }: AddAttachmentButtonProps) => {
  const { pickPhoto } = useGallery();

  const addNewAttachment = async () => {
    const result = await pickPhoto();
    if (result) {
      addAttachment(result);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={addNewAttachment}>
      <Text style={styles.text}>Add{'\n'}photo +</Text>
    </TouchableOpacity>
  );
};

export default AddAttachmentButton;
