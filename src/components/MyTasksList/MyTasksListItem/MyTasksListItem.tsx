import { useNavigation } from '@react-navigation/native';
import { Alert, Pressable, View } from 'react-native';
import { useDispatch } from 'react-redux';
import BinIcon from '../../../assets/icons/BinIcon';
import ChangeIcon from '../../../assets/icons/ChangeIcon';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AppNavigationParams } from '../../../interfaces/navigation/routeParams';
import { deleteTaskAsyncAction } from '../../../redux/actions/tasksActions';
import { TAppDispatch } from '../../../redux/store';
import CheckItem from '../../CheckItem/CheckItem';
import IconButton from '../../IconButton/IconButton';
import styles from './MyTasksListItem.styles';

type ItemProps = { id: number; title: string; done: boolean };

const Item = ({ id, done, title }: ItemProps) => {
  const navigation = useNavigation<AppNavigationParams>();
  const dispatch = useDispatch<TAppDispatch>();

  const deleteTaskButton = () =>
    Alert.alert('Are you sure?', '', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Yes',
        onPress: () => dispatch(deleteTaskAsyncAction(id)),
      },
    ]);

  return (
    <Pressable
      style={styles.item}
      onPress={() =>
        navigation.navigate(ERouteNames.TASK_DETAILS, { taskId: id })
      }
    >
      <CheckItem title={title} />
      <View style={styles.iconsWrapper}>
        <IconButton Icon={BinIcon} onPress={deleteTaskButton} />
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
