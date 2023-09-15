import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit{

  type: String = 'password';
  visible: Boolean = false;
  changetype: boolean = true;

  viewPass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

  


}
