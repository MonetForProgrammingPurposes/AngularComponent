import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
  email: string = '';
  password: string = '';
  loginmessage: string = '';

  login() {
    if (this.email === 'kaysie@gmail.com' && this.password === '12345') {
      this.loginmessage = 'Login Successful';
    } else {
      this.loginmessage = 'Login Failed';
    }
  }

}