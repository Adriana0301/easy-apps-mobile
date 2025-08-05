import { Alert, Text, View } from 'react-native';
import BinIcon from '../../../assets/icons/BinIcon';
import ChangeIcon from '../../../assets/icons/ChangeIcon';
import IconButton from '../../IconButton/IconButton';
import styles from './MyTasksListItem.styles';

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.iconsWrapper}>
      <IconButton Icon={BinIcon} onPress={() => Alert.alert('Delete')} />
      <IconButton Icon={ChangeIcon} onPress={() => Alert.alert('Edit')} />
    </View>
  </View>
);

export default Item;
