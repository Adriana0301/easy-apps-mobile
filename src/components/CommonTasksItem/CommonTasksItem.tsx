import { JSX } from 'react';
import { Text, View } from 'react-native';
import styles from './CommonTaskItem.styles';

type CommonTasksItemProps = {
  title: string;
};

const CommonTasksItem = ({ title }: CommonTasksItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.text}>
        {title.slice(0, 30) + (title.length > 30 ? '...' : '')}
      </Text>
    </View>
  );
};

export default CommonTasksItem;
