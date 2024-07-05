import { Component } from '@angular/core';

@Component({
  selector: 'app-lottery-quick-pick',
  templateUrl: './lottery-quick-pick.component.html',
  styleUrl: './lottery-quick-pick.component.scss'
})
export class LotteryQuickPickComponent {
  lotteryNumbers: number[] = [];
  private apiUrl: string = 'https://api.random.org/json-rpc/4/invoke';
  private apiKey: string = 'ffd00b9e-b94c-4e8f-8603-91cae7fe2edb';

  async getLotteryNumbers(): Promise<void> {
    const quantity = 6; // Number of lottery numbers
    const min = 1; // Minimum value of numbers
    const max = 49; // Maximum value of numbers
    const maxExtra = 10; // Maximum value for extra number

    const requestData = {
      jsonrpc: '2.0',
      method: 'generateIntegers',
      params: {
        apiKey: this.apiKey,
        n: quantity + 1, // Number of numbers including extra number
        min,
        max,
        replacement: false
      },
      id: 1
    };

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      const data = await response.json();
      if (data.result && data.result.random && data.result.random.data) {
        const numbers = data.result.random.data.slice(0, quantity);
        const extraNumber = data.result.random.data[quantity];

        this.lotteryNumbers = [...numbers, extraNumber];
      } else {
        // this.lotteryNumbers = ['Error fetching numbers'];
      }
    } catch (error) {
      console.error('Error:', error);
      // this.lotteryNumbers = ['Error fetching numbers'];
    }
  }
}
