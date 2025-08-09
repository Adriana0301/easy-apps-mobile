import { useDispatch, useSelector } from 'react-redux';
import { getTasksAsyncAction } from '../redux/actions/tasksActions';
import { TAppDispatch, TRootState } from '../redux/store';

const useTasks = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const tasks = useSelector<TRootState, any[]>(
    (state: TRootState) => state.tasks.tasks,
  );
  const total = useSelector<TRootState, number>(
    (state: TRootState) => state.tasks.total,
  );
  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.tasks.isLoading,
  );
  const error = useSelector<TRootState, string | null>(
    (state: TRootState) => state.tasks.isError,
  );
  const getAllTasks = () => {
    dispatch(getTasksAsyncAction());
  };

  return {
    error,
    tasks,
    total,
    loading,
    getAllTasks,
  };
};

export default useTasks;
