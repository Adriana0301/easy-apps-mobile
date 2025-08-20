import { useDispatch, useSelector } from 'react-redux';
import { TaskState } from '../interfaces/tasks/tasks';
import {
  changeTaskStatusAsyncAction,
  createTaskAsyncAction,
  getTaskByIdAsyncAction,
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
  const currentTask = useSelector<TRootState, TaskState | null>(
    (state: TRootState) => state.tasks.currentTask,
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

  const getTaskById = (id: number) => {
    dispatch(getTaskByIdAsyncAction(id));
  };

  const createTask = (
    title: string,
    description: string,
    files?: string[],
    onSuccess?: () => void,
  ) => {
    dispatch(createTaskAsyncAction({ title, description, files, onSuccess }));
  };

  const changeTaskStatus = (id: number, done: boolean) => {
    dispatch(changeTaskStatusAsyncAction({ id, done }));
  };

  return {
    error,
    tasks,
    currentTask,
    total,
    loading,
    getAllTasks,
    createTask,
    getTaskById,
    changeTaskStatus,
  };
};

export default useTasks;
