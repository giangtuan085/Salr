export interface User {
  userName: string;
  password?: string;
  role: number;
  token: string;
}

export enum UserRole {
  Upload,
  Reviewer,
  Admin,
}
