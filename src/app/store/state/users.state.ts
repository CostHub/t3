import { IUser } from "../models/user.interface";

export interface UserState {

  users: IUser[];
  selectedUser: IUser | null;

}


export const initialUserState: UserState = {
  users: [],
  selectedUser: null
}
