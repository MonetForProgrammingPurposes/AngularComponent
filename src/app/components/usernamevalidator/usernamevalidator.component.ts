import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = '';
  message: string = '';
  checkUsername() {
    if (!this.isValidUsername(this.username)) {
      this.message = 'Invalid username. It must be at least 5 characters long, contain only alphanumeric characters, and have no spaces.';
    } else {
      this.message = 'Valid username!';
    }
  }

  isValidUsername(username: string): boolean {
    const minLength = 5;
    const usernameRegex = /^[a-zA-Z0-9]+$/;

    return username.length >= minLength && usernameRegex.test(username);
  }

}