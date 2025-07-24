import { useState } from 'react';
import { Platform } from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { PERMISSIONS } from 'react-native-permissions';
import usePermission from './usePermission';

const useGallery = () => {
  const [photo, setPhoto] = useState<string | null>(null);

  const { allowed, checkPermission } = usePermission(
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
      : PERMISSIONS.IOS.PHOTO_LIBRARY,
  );

  const fetchGallery = async (): Promise<string | undefined> => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };
    const galleryResponse = await launchImageLibrary(options);
    if (galleryResponse.assets) {
      return galleryResponse.assets[0].uri;
    } else {
      return undefined;
    }
  };
  const pickPhoto = async (): Promise<string | undefined> => {
    let photoUri: string | undefined;
    console.log(1);
    if (allowed) {
      photoUri = await fetchGallery();
      console.log(2);
    } else {
      const permissionStatus = await checkPermission();
      console.log(3);
      if (permissionStatus) {
        photoUri = await fetchGallery();
        console.log(4);
      }
    }
    if (photoUri) {
      setPhoto(photoUri);
    }
    return photoUri;
  };
  return { photo, pickPhoto };
};
export default useGallery;
