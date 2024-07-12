import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-card-shuffle',
  templateUrl: './card-shuffle.component.html',
  styleUrl: './card-shuffle.component.scss'
})
export class CardShuffleComponent {
  cardQuantity: number = 1;
  cards: any[] = [];

  constructor(private http: HttpClient) {}

  drawCards() {
    this.http.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=${this.cardQuantity}`)
      .subscribe((data: any) => {
        this.cards = data.cards;
      }, error => {
        console.error('Error drawing cards:', error);
      });
  }
}
