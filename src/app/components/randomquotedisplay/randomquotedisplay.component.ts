import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "Be yourself; everyone else is already taken.",
    "Without music, life would be a mistake.",
    "A day without laughter is a day wasted.",
    "Whenever I feel the need to exercise, I lie down until it goes away.",
    "No medicine cures what happiness cannot."
  ];

  randomQuote: string | null = null;

  displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }

}