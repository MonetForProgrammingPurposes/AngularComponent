
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.css'
})
export class StopwatchComponent {
  elapsedTime: number = 0;
  timer: any = null;

  start() {
    if (!this.timer) {
      this.timer = setInterval(() => this.elapsedTime++, 1000);
    }
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }

  reset() {
    this.stop();
    this.elapsedTime = 0;
  }

}
