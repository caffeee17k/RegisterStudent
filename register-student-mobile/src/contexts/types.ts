export interface LoginProps {
  email: string;
  password: string;
}

export interface AuthContextData {
  signed: boolean;
  user: IUser | null;
  loading: boolean;
  signIn: (data: LoginProps) => void;
  signOut(): void;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}