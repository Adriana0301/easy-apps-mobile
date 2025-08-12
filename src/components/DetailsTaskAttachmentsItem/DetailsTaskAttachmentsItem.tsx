import { useState } from 'react';
import { Image, Modal, TouchableOpacity, View } from 'react-native';
import styles from './DetailsTaskAttachmentsItem.styles';

type DetailsTaskAttachmentsItemProps = {
  item: string;
};

const DetailsTaskAttachmentsItem: React.FC<DetailsTaskAttachmentsItemProps> = ({
  item,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => setModalVisible(true)}
      >
        <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalBackground}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setModalVisible(false)}
            activeOpacity={1}
          >
            <Image
              source={{ uri: item }}
              resizeMode="contain"
              style={styles.fullImage}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default DetailsTaskAttachmentsItem;
