import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrl: './dice-roller.component.scss'
})
export class DiceRollerComponent {
  apiKey = '11e3d1f0-655a-4efd-bede-d14eb2ac3102';
  apiUrl = 'https://api.random.org/json-rpc/2/invoke';
  diceQuantity = 1;

  constructor(private http: HttpClient) {}

  async rollDice() {
    try {
      // Leere den Würfel-Container vor jedem neuen Wurf
      const diceContainer = document.getElementById('diceContainer');
      if (diceContainer) {
        diceContainer.innerHTML = '';
      }

      // Rufe die Funktion für jede geworfene Würfelanzahl auf
      for (let i = 0; i < this.diceQuantity; i++) {
        await this.generateRandomDice();
      }
    } catch (error) {
      console.error('Error rolling dice:', error);
    }
  }

  async generateRandomDice() {
    try {
      const requestBody = {
        jsonrpc: '2.0',
        method: 'generateIntegers',
        params: {
          apiKey: this.apiKey,
          n: 1,
          min: 1,
          max: 6,
          replacement: true,
          base: 10,
        },
        id: 1,
      };

      const response = await this.http.post<any>(this.apiUrl, requestBody).toPromise();
      const diceResult = response.result.random.data[0];

      this.displayDiceResult(diceResult);
    } catch (error) {
      console.error('Error generating random dice:', error);
    }
  }

  displayDiceResult(result: number) {
    console.log(">>>>>>>>>>>>>>>", result)
    const diceContainer = document.getElementById('diceContainer');
    console.log(diceContainer)
    if (diceContainer) {
      const diceImage = document.createElement('img');
      diceImage.classList.add('dice');
      diceImage.src = `https://www.random.org/dice/dice${result}.png`;
      diceImage.alt = `Dice ${result}`;
      diceContainer.appendChild(diceImage);
    }
  }
}
