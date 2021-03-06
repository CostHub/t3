import { Action } from "@ngrx/store";
import  { IUser } from "../models/user.interface";

export enum EUserActions {

  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',

}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {
  }
}


export type UserActions = GetUser | GetUserSuccess

