import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss'],
})
export class RegistroScreenComponent implements OnInit {
  //Variables del componente registro
  public editar: boolean = false;
  public user: any = {};
  //Para contraseñas
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';
  //Para detectar errores
  public errors: any = {};

  constructor(
    private userService: UsuariosService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.user = this.userService.esquemaUser();
    //Imprimir datos en consola
    console.log('User: ', this.user);
  }

  public regresar() {}

  //Funciones para password
  showPassword() {
    if (this.inputType_1 == 'password') {
      this.inputType_1 = 'text';
      this.hide_1 = true;
    } else {
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  showPwdConfirmar() {
    if (this.inputType_2 == 'password') {
      this.inputType_2 = 'text';
      this.hide_2 = true;
    } else {
      this.inputType_2 = 'password';
      this.hide_2 = false;
    }
  }

  //Función para detectar el cambio de fecha
  //Para la fecha
  public changeFecha(event: any) {
    console.log(event);
    console.log(event.value.toISOString());

    this.user.fecha_nacimiento = event.value.toISOString().split('T')[0];
    console.log('Fecha: ', this.user.fecha_nacimiento);
  }

  public registrar() {
    this.errors = {};
    this.errors = this.userService.validarUsuario(this.user);
    console.log('Registrando usuario...', this.user);

    //Validar que no haya errores
    if (!$.isEmptyObject(this.errors)) {
      return false;
    }
    //Validar la contraseña y la confirmación
    if (this.user.password != this.user.confirmar_password) {
      alert('Las contraseñas no coinciden');
    } else {
      this.userService.registrarUsuario(this.user).subscribe(
        (response ) => {
          alert('Usuario registrado correctamente');
          console.log("Usuario registrado: ", response);
          this.router.navigate(['/']);
        },
        (error) => {
          alert('Error al registrar usuario');
          console.log("Error al registrar usuario: ", error);
        }
      )
    }
    
    
  }
}
