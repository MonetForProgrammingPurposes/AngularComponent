
import { Component } from '@angular/core';

@Component({
  selector: 'app-randomcolor',
  templateUrl: './randomcolor.component.html',
  styleUrl: './randomcolor.component.css'
})
export class RandomcolorComponent {
  color: string = '#000000';

  generateColor() {
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
