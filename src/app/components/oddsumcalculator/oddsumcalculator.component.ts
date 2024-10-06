
import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  n: number | null = null;
  oddSum: number | null = null;

  calculateOddSum() {
    if (this.n !== null && this.n > 0) {
      this.oddSum = this.getOddSum(this.n);
    } else {
      this.oddSum = null;
    }
  }

  getOddSum(n: number): number {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }

    return sum;
  }

}
