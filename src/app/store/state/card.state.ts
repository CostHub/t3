import { ICard } from "../models/card.interface";
import {Card} from "../../components/card-model/card.model";


export interface ICardState {

  cards: ICard[];
  selectedCard: number | null;

}


export const initialCardState: ICardState = {
  cards: [
    new Card("Fix something","server room 1", "12.12.12", false),
    new Card("Another fixes","server room 2", "11.11.11", false),
  ],

  selectedCard: null
}
