import { Component, OnInit } from '@angular/core';

//navigate
import { Router } from '@angular/router';


declare var $: any;
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  
  type: String = 'password';
  visible: Boolean = false;
  changetype: boolean = true;

  viewPass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  constructor(private router : Router) {}

  ngOnInit(): void {}

  public login(){
    console.log('Login');
    this.router.navigate(['/nuevo-producto']);

  }
}
