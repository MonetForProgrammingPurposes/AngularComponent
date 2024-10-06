
import { Component } from '@angular/core';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrl: './countdowntimer.component.css'
})
export class CountdowntimerComponent {
  time: number = 0;
  timeLeft: number = 0;
  timer: any;

  startCountdown() {
    this.timeLeft = this.time;
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

}
