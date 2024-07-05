import {Component} from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrl: './dice-roller.component.scss'
})
export class DiceRollerComponent {
  rollCount: number = 1;
  diceImages: string[] = [];
  private apiKey: string = 'ffd00b9e-b94c-4e8f-8603-91cae7fe2edb';

  rollDice(): void {
    this.diceImages = []; // Reset previous images

    for (let i = 0; i < this.rollCount; i++) {
      fetch('https://api.random.org/json-rpc/4/invoke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'generateIntegers',
          params: {
            apiKey: this.apiKey,
            n: 1, // Number of dice rolls
            min: 1, // Minimum value of the dice
            max: 6, // Maximum value of the dice (for a standard 6-sided dice)
          },
          id: i + 1, // A unique ID for each request
        }),
      })
        .then(response => response.json())
        .then(data => {
          const diceResult = data.result.random.data[0];
          const imageURL = 'assets/img/dice_'+ diceResult + '.png';
          this.diceImages.push(imageURL);
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error retrieving dice roll.');
        });
    }
  }

  resetDice(): void {
    this.diceImages = [];
  }
}
