export class User {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  token?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type SignupData = {
  username: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
};

export type Credentials = {
  email: string | null | undefined;
  password: string | null | undefined;
};
