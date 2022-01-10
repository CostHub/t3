import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as fromCards from "../../store/state/card.state" ;
import { Store, select } from '@ngrx/store';
import {Card} from "../card-model/card.model";
import * as Selectors from "../../store/selectors/selector" ;
import {AddCard} from "../../store/actions/card.actions";

@Component({
  selector: 'app-cards-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})

export class CardsFormComponent implements OnInit {

  FG = new FormGroup({
    title: new FormControl('test title'),
    area: new FormControl('test body'),
    date: new FormControl('10/10/10'),
    isImportant: new FormControl(0)
  });



  constructor(private _store: Store<fromCards.ICardState>) { }

  ngOnInit() {
  }


  public onSubmit() {
    this._store.dispatch(new AddCard(this.FG.value));

    const cards$ = this._store.pipe(select(Selectors.allCards));
  }

}
