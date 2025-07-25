import { Image, View } from 'react-native';
import IconContainer from '../IconContainer/IconContainer';
import styles from './ImageContainer.styles';

const ImageContainer = ({ values, pickPhoto, setFieldValue }) => {
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
        onPickPhoto={async () => {
          const result = await pickPhoto();
          if (result) {
            setFieldValue('avatar', result);
          }
        }}
        onDeletePhoto={() => setFieldValue('avatar', '')}
      />
    </View>
  );
};

export default ImageContainer;
