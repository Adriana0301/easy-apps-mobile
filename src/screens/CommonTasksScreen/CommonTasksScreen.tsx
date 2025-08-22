import { FlatList, Text, View } from 'react-native';
import ActiveIndicator from '../../components/ActiveIndicator/ActiveIndicator';
import AppHeader from '../../components/AppHeader/AppHeader';
import CommonTasksItem from '../../components/CommonTasksItem/CommonTasksItem';
import usePagination from '../../hooks/usePagination';
import useTasks from '../../hooks/useTasks';
import styles from './CommonTasksScreen.styles';

const CommonTasksScreen = () => {
  const { loading, error } = useTasks();
  const { data, refreshing, handleRefresh, handleLoadMore, hasMore } =
    usePagination();

  if (error) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>Something went wrong...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppHeader label="Common Tasks" />
      </View>
      {loading && data.length === 0 ? (
        <ActiveIndicator />
      ) : (
        <View>
          {data.length ? (
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <CommonTasksItem title={item.title} />}
              keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
              onEndReached={() => hasMore && handleLoadMore()}
              onEndReachedThreshold={0.5}
              refreshing={refreshing}
              onRefresh={handleRefresh}
              ListFooterComponent={
                loading && hasMore ? <ActiveIndicator /> : null
              }
              style={styles.flatList}
            />
          ) : (
            <View style={styles.wrapper}>
              <Text style={styles.text}>No tasks yet</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default CommonTasksScreen;
