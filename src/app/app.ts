import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = 'Church Management System';
  protected readonly subtitle = 'Welcome to our church management platform.';

  email = '';
  password = '';
  loginMessage = '';
  showToast = signal(false);

 login() {
  if (this.email.trim() === '' || this.password.trim() === '') {
    this.loginMessage = 'Please enter your email and password.';
  } else {
    this.loginMessage = 'Form completed! Ready for validation.';
  }

 this.showToast.set(true);

setTimeout(() => {
  this.showToast.set(false);
}, 2000);
}


}
