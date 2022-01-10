import { Action } from "@ngrx/store";
import  { ICard } from "../models/card.interface";

export enum ECardActions {
  AddCard = '[Card] Add Card',
  GetCards = '[Card] Get Cards',
  // GetCardsSuccess = '[Card] Get Cards Success',
  SelectCard = '[Card] Get Card',
}

export class AddCard implements Action {
  public readonly type = ECardActions.AddCard;
  constructor(public payload: ICard ){
  }
}

export class GetCards implements Action {
    public readonly type = ECardActions.GetCards;
    constructor(public payload: ICard[] ){
  }
}

// export class GetCardsSuccess implements Action {
//   public readonly type = ECardActions.GetCardsSuccess;
//   constructor(public payload: ICard[]) {
//   }
// }

export class SelectCard implements Action {
  public readonly type = ECardActions.SelectCard;
  constructor(public payload: number) {
  }
}

export type CardActions = SelectCard | GetCards | AddCard

