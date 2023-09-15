import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {

  type: String = 'password';

  constructor() { }


}
