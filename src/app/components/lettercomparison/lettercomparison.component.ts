
import { Component } from '@angular/core';

@Component({
  selector: 'app-lettercomparison',
  templateUrl: './lettercomparison.component.html',
  styleUrl: './lettercomparison.component.css'
})
export class LettercomparisonComponent {
  string1: string = '';
  string2: string = '';
  resultMessage: string = '';

  compareStrings() {
    this.resultMessage = this.string1 === this.string2 ? 'Strings are equal' : 'Strings are different';
  }

}
