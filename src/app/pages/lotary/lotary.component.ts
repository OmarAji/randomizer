import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-lotary',
  templateUrl: './lotary.component.html',
  styleUrl: './lotary.component.scss'
})
export class LotaryComponent {
  apiKey = '11e3d1f0-655a-4efd-bede-d14eb2ac3102';
  apiUrl = 'https://api.random.org/json-rpc/2/invoke';
  quantity = 6;
  numberOfArrays = 1;
  arrays: number[][] = [];

  constructor(private http: HttpClient) {}

  async getLotteryNumbers() {
    try {
      if (this.numberOfArrays > 2) {
        alert('The number of arrays should not exceed 2.');
        return;
      }

      const requestBody = {
        jsonrpc: '2.0',
        method: 'generateIntegers',
        params: {
          apiKey: this.apiKey,
          n: this.quantity * this.numberOfArrays,
          min: 1,
          max: 49,
          replacement: false,
          base: 10,
        },
        id: 1,
      };

      const response = await this.http.post<any>(this.apiUrl, requestBody).toPromise();
      const lotteryNumbers = response.result.random.data;
      this.arrays = this.chunkArray(lotteryNumbers, this.quantity);
    } catch (error) {
      console.error('Error fetching lottery numbers:', error);
    }
  }

  chunkArray(arr: number[], chunkSize: number): number[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
}
