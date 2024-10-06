
import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  userGuess: number | null = null;
  randomNumber: number = 0;
  message: string = '';

  ngOnInit() {
    this.generateRandomNumber();
  }

  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
  }

  checkGuess() {
    if (this.userGuess === null) {
      this.message = 'Please enter a number!';
    } else if (this.userGuess < this.randomNumber) {
      this.message = 'Too low! Try again.';
    } else if (this.userGuess > this.randomNumber) {
      this.message = 'Too high! Try again.';
    } else {
      this.message = `Congratulations! ${this.userGuess} is the correct guess!`;
      this.generateRandomNumber();
    }
    this.userGuess = null;
  }

}
