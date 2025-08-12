export type UserState = {
  id?: string;
  username?: string;
  email?: string;
  avatar?: string;
};

export type UserRequestState = {
  isLoading: boolean;
  isError: string | null;
  userInfo: UserState | null;
};
