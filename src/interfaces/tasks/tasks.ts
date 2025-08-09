export type TasksPayload = {
  title: string;
  description: string;
  files?: string;
};

export type TasksState = {
  isLoading: boolean;
  isError: string | null;
  tasks: any[];
  total: number;
};
