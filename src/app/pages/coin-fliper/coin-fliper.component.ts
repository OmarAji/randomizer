import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-coin-fliper',
  templateUrl: './coin-fliper.component.html',
  styleUrl: './coin-fliper.component.scss'
})
export class CoinFliperComponent {
  apiKey = '11e3d1f0-655a-4efd-bede-d14eb2ac3102';
  apiUrl = 'https://api.random.org/json-rpc/2/invoke';
  coinResults: number[] = [];
  results: string[] = [];
  flipCount: number = 1;

  constructor(private http: HttpClient) {
  }


  async flipCoin() {
    try {

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'generateIntegers',
          params: {
            apiKey: this.apiKey,
            n: this.flipCount,
            min: 0,
            max: 1,
            replacement: true,
          },
          id: 1,
        }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      } else {
        const results = data.result.random.data;
        this.results = results.map((result: number) => result === 0 ? 'Kopf' : 'Zahl');

        // Update coin images
        const coinImagesContainer = document.querySelector('.coin-images');
        if (coinImagesContainer) {
          coinImagesContainer.innerHTML = ''; // Clear old images
          results.forEach((result: number) => {
            const coinImage = document.createElement('img');
            coinImage.src = result === 0 ? 'assets/img/Kopf.png' : 'assets/img/Zahl.png';
            coinImage.alt = result === 0 ? 'Kopf' : 'Zahl';
            coinImagesContainer.appendChild(coinImage);
          });
        }
      }
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten:', error);
    }
  }
}
