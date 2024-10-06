import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromenumber',
  templateUrl: './palindromenumber.component.html',
  styleUrl: './palindromenumber.component.css'
})
export class PalindromenumberComponent {
  number: number = 0;
  palindromeMessage: string = '';

  checkPalindrome() {
    const strNumber = this.number.toString();
    this.palindromeMessage = strNumber === strNumber.split('').reverse().join('') 
      ? 'It is a palindrome number' 
      : 'Not a palindrome number';
  }

}