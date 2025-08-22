import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskState } from '../interfaces/tasks/tasks';
import {
  allTasksAsyncAction,
  changeTaskStatusAsyncAction,
  createTaskAsyncAction,
  deleteFileAsyncAction,
  editTaskAsyncAction,
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
  const commonTasks = useSelector<TRootState, TaskState[]>(
    (state: TRootState) => state.tasks.commonTasks,
  );
  const page = useSelector<TRootState, number>(
    (state: TRootState) => state.tasks.page,
  );
  const tasksPerPage = useSelector<TRootState, number>(
    (state: TRootState) => state.tasks.tasksPerPage,
  );
  const totalCommonTasks = useSelector<TRootState, number>(
    (state: TRootState) => state.tasks.taskTotalCount,
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
  const getCommonTasks = useCallback(
    (page: number, tasksPerPage: number) => {
      dispatch(allTasksAsyncAction({ page, tasksPerPage }));
    },
    [dispatch],
  );

  const editTask = (
    id: number,
    done: boolean,
    title: string,
    description?: string,
    files?: string[],
  ) => {
    return dispatch(
      editTaskAsyncAction({ id, title, description, files, done }),
    );
  };

  const deleteFile = (id: number, file: string) => {
    return dispatch(deleteFileAsyncAction({ id, file }));
  };

  return {
    error,
    tasks,
    currentTask,
    commonTasks,
    page,
    tasksPerPage,
    totalCommonTasks,
    total,
    loading,
    getAllTasks,
    createTask,
    getTaskById,
    changeTaskStatus,
    getCommonTasks,
    editTask,
    deleteFile,
  };
};

export default useTasks;
