import { Component, OnInit } from '@angular/core';
import {Observable, interval } from "rxjs";
import {GetCards} from "../../actions/card.actions";
import {ICard} from "../../models/card.interface";
import {ICardState, initialCardState} from "../../state/card.state";
import { Store, select } from '@ngrx/store';
import * as Selectors from "../../selectors/selector"
import {Card} from "../../../components/card-model/card.model";

@Component({
  selector: 'app-incidents-page',
  templateUrl: './incidents-page.component.html',
  styleUrls: ['./incidents-page.component.scss']
})
export class IncidentsPageComponent implements OnInit {

  IncidentsCards: ICard[] = [];
  constructor(
    private _store: Store<ICardState>) { }

  Cards_: Observable<number> | undefined


  ngOnInit(){
    this._store.dispatch(new GetCards(initialCardState.cards))
    const cards$ = this._store.pipe(select(Selectors.allCards));

    cards$.subscribe(res => {
      this.IncidentsCards = initialCardState.cards
      this.Cards_ = interval(500)

    });

  }

  //IncidentsCards_show: Observable<ICard[]>;
  // constructor() { this.showIncidentCards(); }
  //
  // showIncidentCards() {
  //   this.IncidentsCards = interval(1000).pipe(map((i:number)=> this.IncidentsCards[i]));
  // }




  onModal() {
    //todo
  }
}
