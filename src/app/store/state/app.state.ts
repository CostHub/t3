import { RouterReducerState } from "@ngrx/router-store"
import { ICardState , initialCardState} from "./card.state";
import { UserState, initialUserState } from "./users.state";

export interface AppState{
  router?: RouterReducerState;
  users: UserState;
  cards: ICardState;
}

export const initialAppState: AppState = {
  users: initialUserState,
  cards: initialCardState
}

export function getInitialState(): AppState {
  return initialAppState;
}


