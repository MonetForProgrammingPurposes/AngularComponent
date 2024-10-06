
import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  n: number | null = null;
  fibonacciSequence: number[] = [];

  generateFibonacci() {
    if (this.n !== null && this.n > 0) {
      this.fibonacciSequence = this.getFibonacci(this.n);
    } else {
      this.fibonacciSequence = [];
    }
  }

  getFibonacci(n: number): number[] {
    let fib: number[] = [0, 1];

    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib.slice(0, n);
  }

}
