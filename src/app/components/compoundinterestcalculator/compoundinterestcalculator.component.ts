
import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  frequency: number | null = null;
  compoundInterest: number | null = null;
  amount: number | null = null;

  calculateCompoundInterest() {
    if (this.principal !== null && this.rate !== null && this.time !== null && this.frequency !== null) {
      const ratePerPeriod = this.rate / (this.frequency * 100);
      const totalPeriods = this.frequency * this.time;
      this.amount = this.principal * Math.pow((1 + ratePerPeriod), totalPeriods);
      this.compoundInterest = this.amount - this.principal;
    } else {
      this.compoundInterest = null;
      this.amount = null;
    }
  }

}
