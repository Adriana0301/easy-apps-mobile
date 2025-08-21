import { useCallback, useEffect, useState } from 'react';
import useTasks from './useTasks';

const initialData = { page: 1, tasksPerPage: 10 };

const usePagination = () => {
  const { getCommonTasks, commonTasks, loading, totalCommonTasks } = useTasks();
  const [page, setPage] = useState(initialData.page);
  const [refreshing, setRefreshing] = useState(false);

  const tasksPerPage = initialData.tasksPerPage;
  const hasMore = commonTasks.length < totalCommonTasks;

  useEffect(() => {
    getCommonTasks(page, tasksPerPage);
  }, [page, tasksPerPage]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    getCommonTasks(1, tasksPerPage);
    setRefreshing(false);
  }, [getCommonTasks, tasksPerPage]);

  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
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
