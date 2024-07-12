import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-keno-quick',
  templateUrl: './keno-quick.component.html',
  styleUrl: './keno-quick.component.scss'
})
export class KenoQuickComponent {
  apiKey = '11e3d1f0-655a-4efd-bede-d14eb2ac3102';
  apiUrl = 'https://api.random.org/json-rpc/2/invoke';
  numberOfTickets = 3;
  numbersPerTicket = 4;
  maxValue = 70;
  kenoTickets: number[][] = [];

  constructor(private http: HttpClient) {}

  async getKenoNumbers() {
    try {
      const requestBody = {
        jsonrpc: '2.0',
        method: 'generateIntegers',
        params: {
          apiKey: this.apiKey,
          n: this.numberOfTickets * this.numbersPerTicket,
          min: 1,
          max: this.maxValue,
          replacement: false,
          base: 10,
        },
        id: 1,
      };

      const response = await this.http.post<any>(this.apiUrl, requestBody).toPromise();
      const kenoNumbers = response.result.random.data;
      this.displayKenoNumbers(kenoNumbers);
    } catch (error) {
      console.error('Error fetching keno numbers:', error);
    }
  }

  displayKenoNumbers(numbers: number[]) {
    this.kenoTickets = [];
    for (let i = 0; i < this.numberOfTickets; i++) {
      const ticketNumbers = numbers.slice(i * this.numbersPerTicket, (i + 1) * this.numbersPerTicket);
      this.kenoTickets.push(ticketNumbers);
    }
  }
}
