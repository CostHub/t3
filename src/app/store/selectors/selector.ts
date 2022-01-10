import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICardState } from "../state/card.state";

const getCardState = createFeatureSelector<ICardState>('cards');

export const allCards = createSelector(getCardState, (state: ICardState) => {
  return state;
});

export const firstTenCards = createSelector(getCardState, (state: ICardState) => {
  const users = state.cards.slice(0, 10);
  return { ...state, data: users };
});
