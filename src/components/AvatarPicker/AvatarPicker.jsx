import { Image, View } from 'react-native';
import IconContainer from '../IconContainer/IconContainer';
import styles from './AvatarPicker.styles';

const AvatarPicker = ({ values, pickPhoto, setFieldValue }) => {
  const onPickPhoto = async () => {
    const result = await pickPhoto();
    if (result) {
      setFieldValue('avatar', result);
    }
  };

  return (
    <View style={styles.imageContainer}>
      {!values.avatar ? (
        <Image
          style={styles.image}
          source={require('../../assets/images/default-avatar.jpg')}
        />
      ) : (
        <Image style={styles.image} src={values.avatar} />
      )}
      <IconContainer
        onPickPhoto={onPickPhoto}
        onDeletePhoto={() => setFieldValue('avatar', '')}
      />
    </View>
  );
};

export default AvatarPicker;
