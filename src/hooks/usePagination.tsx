import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/tasks/tasksSlice';
import useTasks from './useTasks';

const usePagination = () => {
  const dispatch = useDispatch();
  const {
    getCommonTasks,
    commonTasks,
    loading,
    totalCommonTasks,
    page,
    tasksPerPage,
  } = useTasks();

  const [refreshing, setRefreshing] = useState(false);

  const hasMore = commonTasks.length < totalCommonTasks;

  useEffect(() => {
    getCommonTasks(page, tasksPerPage);
  }, [page, tasksPerPage]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(setPage(1));
    getCommonTasks(1, tasksPerPage);
    setRefreshing(false);
  }, [getCommonTasks, tasksPerPage]);

  const handleLoadMore = useCallback(async () => {
    if (!loading && hasMore) {
      dispatch(setPage(page + 1));
    }
  }, [loading, hasMore]);

  return {
    data: commonTasks,
    page,
    tasksPerPage,
    refreshing,
    handleRefresh,
    handleLoadMore,
    hasMore,
  };
};

export default usePagination;
