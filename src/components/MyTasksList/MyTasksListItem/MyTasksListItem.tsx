import { useNavigation } from '@react-navigation/native';
import { Alert, Pressable, View } from 'react-native';
import BinIcon from '../../../assets/icons/BinIcon';
import ChangeIcon from '../../../assets/icons/ChangeIcon';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AppNavigationParams } from '../../../interfaces/navigation/routeParams';
import CheckItem from '../../CheckItem/CheckItem';
import IconButton from '../../IconButton/IconButton';
import styles from './MyTasksListItem.styles';

type ItemProps = { id: string; title: string; done: boolean };

const Item = ({ title, done, id }: ItemProps) => {
  const navigation = useNavigation<AppNavigationParams>();
  return (
    <Pressable
      style={styles.item}
      onPress={() =>
        navigation.navigate(ERouteNames.TASK_DETAILS, { taskId: id })
      }
    >
      <CheckItem />
      <View style={styles.iconsWrapper}>
        <IconButton
          Icon={BinIcon}
          onPress={() => Alert.alert('Are you sure?')}
        />
        <IconButton
          Icon={ChangeIcon}
          onPress={() =>
            navigation.navigate(ERouteNames.TASK_EDITOR, { taskId: id })
          }
        />
      </View>
    </Pressable>
  );
};

export default Item;
