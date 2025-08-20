export type TasksPayload = {
  title: string;
  description?: string;
  files?: string[];
  onSuccess?: () => void;
};

export type TaskState = {
  id: number;
  title: string;
  description?: string;
  done: boolean;
  files?: string[];
};

export type TasksState = {
  isLoading: boolean;
  isError: string | null;
  tasks: TaskState[];
  currentTask: TaskState | null;
};

export type StatusPayload = {
  id: number;
  done: boolean;
};

export type AllTasksParams = {
  page: number;
  tasksPerPage: number;
};

export type AllTasksState = {
  isLoading: boolean;
  isError: string | null;
  tasks: TaskState[];
  page: number;
  tasksPerPage: number;
};
