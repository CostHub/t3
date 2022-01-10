import { initialCardState, ICardState } from "../state/card.state";
import {AddCard, CardActions, ECardActions, SelectCard} from "../actions/card.actions";


export const cardReducers = ( state = initialCardState, action: CardActions): ICardState => {
  switch (action.type) {
    case ECardActions.GetCards:
      return {
        ...state,
        cards: action.payload
      };
    // case ECardActions.GetCardsSuccess:
    //   return {
    //     ...state,
    //     cards: action.payload
    //   };
    case ECardActions.SelectCard:
      return {
        ...state,
        selectedCard: action.payload
      };
    case ECardActions.AddCard:
      let updatedCards = [...state["cards"]];
      updatedCards.push(action.payload);
      return {
        ...state,
        cards: updatedCards
      };

    default:
      return state;
  }
};


