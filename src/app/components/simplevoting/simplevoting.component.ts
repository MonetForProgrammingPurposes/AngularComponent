import { Component } from '@angular/core';

@Component({
  selector: 'app-simplevoting',
  templateUrl: './simplevoting.component.html',
  styleUrl: './simplevoting.component.css'
})
export class SimplevotingComponent {
  votes: number = 0;

  upvote() {
    this.votes++;
  }

  downvote() {
    this.votes--;
  }

}