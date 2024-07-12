import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fund-randomizer',
  templateUrl: './fund-randomizer.component.html',
  styleUrl: './fund-randomizer.component.scss'
})
export class FundRandomizerComponent {
  apiKey = '11e3d1f0-655a-4efd-bede-d14eb2ac3102';
  apiUrl = 'https://api.random.org/json-rpc/4/invoke';
  numberRange = 10;
  randomNumbers: number[] = [];

  constructor(private http: HttpClient) {
  }

  async generateRandomNumbers() {
    try {
      const numberRange = this.numberRange;

      const requestBody = {
        jsonrpc: '2.0',
        method: 'generateIntegers',
        params: {
          apiKey: this.apiKey,
          n: 1, // number of random numbers to generate
          min: 1,
          max: numberRange,
          replacement: true, // allow duplicates
          base: 10,
        },
        id: 1,
      };

      const response = await this.http.post<any>(this.apiUrl, requestBody).toPromise();

      if (response.error) {
        throw new Error(response.error.message);
      }

      const randomNumber = response.result.random.data[0];
      this.randomNumbers = [randomNumber]; // Push new number to array

    } catch (error) {
      console.error('Error generating random number:', error);
    }
  }
}
