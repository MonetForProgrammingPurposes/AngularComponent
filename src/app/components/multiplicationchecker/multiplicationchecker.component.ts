import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  number: number | null = null;
  divisor: number | null = null;
  message: string = '';

  checkMultiple() {
    if (this.number !== null && this.divisor !== null) {
      if (this.divisor === 0) {
        this.message = 'Cannot divide by zero.';
      } else if (this.number % this.divisor === 0) {
        this.message = `${this.number} is a multiple of ${this.divisor}.`;
      } else {
        this.message = `${this.number} is not a multiple of ${this.divisor}.`;
      }
    } else {
      this.message = 'Please enter both numbers.';
    }
  }

}