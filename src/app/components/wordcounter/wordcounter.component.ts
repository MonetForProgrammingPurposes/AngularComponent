import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
  inputString: string = '';
  wordCount: number | null = null;

  countWords() {
    if (this.inputString.trim()) {
      this.wordCount = this.inputString.trim().split(/\s+/).length;
    } else {
      this.wordCount = 0;
    }
  }

}