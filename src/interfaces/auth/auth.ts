export type AuthState = {
  isLoading: boolean;
  isError: string | null;
  accessToken: string;
}

export type SignUpPayload = {
    email: string;
    name: string;
    password: string;
    avatar?: string;
}

export type LoginPayload = {
  email: string;
  password: string;
}