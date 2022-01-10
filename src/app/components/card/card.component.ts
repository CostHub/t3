import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../card-model/card.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {


  @Input() card : Card | undefined

}
