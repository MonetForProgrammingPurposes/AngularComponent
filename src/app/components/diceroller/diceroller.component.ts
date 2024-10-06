import { Component } from '@angular/core';

@Component({
  selector: 'app-diceroller',
  templateUrl: './diceroller.component.html',
  styleUrl: './diceroller.component.css'
})
export class DicerollerComponent {
  diceResult: number | null = null;

  rollDice() {
    this.diceResult = Math.floor(Math.random() * 6) + 1;
  }

}