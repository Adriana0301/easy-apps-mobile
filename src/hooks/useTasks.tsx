import { useDispatch, useSelector } from 'react-redux';
import { getTasksAsyncAction } from '../redux/actions/tasksActions';
import { TAppDispatch, TRootState } from '../redux/store';

const useTasks = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const tasks = useSelector<TRootState, []>(
    (state: TRootState) => state.tasks.tasks,
  );
  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.tasks.isLoading,
  );
  const getAllTasks = () => {
    dispatch(getTasksAsyncAction());
  };

  return {
    tasks,
    loading,
    getAllTasks,
  };
};

export default useTasks;
