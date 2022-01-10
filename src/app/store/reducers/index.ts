import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {cardReducers} from "./card.reducer";


export interface State {

}

export const reducers: ActionReducerMap<State> = {

  AllCards: cardReducers

};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
