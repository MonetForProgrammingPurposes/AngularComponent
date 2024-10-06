
import { Component } from '@angular/core';

@Component({
  selector: 'app-passwordstrengthchecker',
  templateUrl: './passwordstrengthchecker.component.html',
  styleUrl: './passwordstrengthchecker.component.css'
})
export class PasswordstrengthcheckerComponent {
  password: string = '';
  strength: string = '';

  ngOnChanges() {
    const length = this.password.length;
    if (length < 4) {
      this.strength = 'Weak';
    } else if (length < 8) {
      this.strength = 'Medium';
    } else {
      this.strength = 'Strong';
    }
  }

}
