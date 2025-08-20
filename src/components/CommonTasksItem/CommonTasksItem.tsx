import { JSX } from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './CommonTaskItem.styles';

type CommonTasksItemProps = {
  title: string;
};

const CommonTasksItem = ({ title }: CommonTasksItemProps): JSX.Element => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text numberOfLines={1} style={styles.text}>
        {title}
      </Text>
    </ScrollView>
  );
};

export default CommonTasksItem;
