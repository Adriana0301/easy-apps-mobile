export type TasksPayload = {
  title: string;
  description: string;
  files?: string[];
};

export type TaskState = {
  id: number;
  title: string;
  description: string;
  done: boolean;
  files?: string[];
};

export type TasksState = {
  isLoading: boolean;
  isError: string | null;
  tasks: TaskState[];
};
