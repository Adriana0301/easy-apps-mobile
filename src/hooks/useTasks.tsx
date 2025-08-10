import { useDispatch, useSelector } from 'react-redux';
import { TaskState } from '../interfaces/tasks/tasks';
import {
  createTaskAsyncAction,
  getTasksAsyncAction,
} from '../redux/actions/tasksActions';
import { TAppDispatch, TRootState } from '../redux/store';

const useTasks = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const tasks = useSelector<TRootState, TaskState[]>(
    (state: TRootState) => state.tasks.tasks,
  );
  const total = useSelector<TRootState, number>(
    (state: TRootState) => state.tasks.tasks.length,
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

  const createTask = (title: string, description: string, files?: string[]) => {
    console.log('createTask hook');
    dispatch(createTaskAsyncAction({ title, description, files }));
  };

  return {
    error,
    tasks,
    total,
    loading,
    getAllTasks,
    createTask,
  };
};

export default useTasks;
