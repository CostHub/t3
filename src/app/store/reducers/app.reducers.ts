import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { userReducers } from "./user.reducer";
import { cardReducers } from "./card.reducer";

export const appReducers: ActionReducerMap<AppState, any> = {

  users: userReducers,
  cards: cardReducers

};

