
import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number | null = null;
  currency: string = 'USD';
  formattedAmount: string | null = null;

  formatCurrency() {
    if (this.amount !== null) {
      switch (this.currency) {
        case 'USD':
          this.formattedAmount = this.convertToDollar(this.amount);
          break;
        case 'PHP':
          this.formattedAmount = this.convertToPhp(this.amount);
          break;
        case 'EUR':
          this.formattedAmount = this.convertToEuro(this.amount);
          break;
        default:
          this.formattedAmount = null;
      }
    }
  }

  convertToDollar(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }

  convertToPhp(amount: number): string {
    const conversionRate = 56;
    const phpAmount = amount * conversionRate;
    return `₱${phpAmount.toFixed(2)}`;
  }

  convertToEuro(amount: number): string {
    const conversionRate = 0.94;
    const euroAmount = amount * conversionRate;
    return `€${euroAmount.toFixed(2)}`;
  }


}
