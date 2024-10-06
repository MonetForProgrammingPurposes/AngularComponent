
import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  inputWord: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome() {
    const cleanedWord = this.inputWord.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    this.isPalindrome = cleanedWord === reversedWord;
  }

}
