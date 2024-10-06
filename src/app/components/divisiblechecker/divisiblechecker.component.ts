
import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  firstNumber: number | null = null;
  secondNumber: number | null = null;
  resultMessage: string | null = null;

  checkDivisibility() {
    if (this.firstNumber !== null && this.secondNumber !== null) {
      if (this.secondNumber === 0) {
        this.resultMessage = "Division by zero is not allowed.";
      } else if (this.firstNumber % this.secondNumber === 0) {
        this.resultMessage = `${this.firstNumber} is divisible by ${this.secondNumber}.`;
      } else {
        this.resultMessage = `${this.firstNumber} is not divisible by ${this.secondNumber}.`;
      }
    } else {
      this.resultMessage = "Please enter both numbers.";
    }
  }

}
