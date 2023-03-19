import { IUser } from "./user";

export interface IAuthState {
  status: string,
  user: IUser | {},
  errorMessage: null | string
}