import { Injectable } from '@angular/core';
import { ValidatorService } from '../service/tools/validator.service';
import { ErrorsService } from '../service/tools/errors.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environments } from 'src/environments/environments';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(
    private errorService: ErrorsService,
    private validatorService: ValidatorService,
    private http: HttpClient
  ) {}

  public esquemaUser() {
    return {
      matricula: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmar_password: '',
      fecha_nacimiento: '',
      curp: '',
      rfc: '',
      edad: '',
      telefono: '',
      ocupacion: '',
    };
  }

  public validarUsuario(data: any) {
    console.log("Validando usuario...", data);
    let errors: any = {};

    if (!this.validatorService.required(data.matricula)) {
      errors.matricula = this.errorService.required;
    }

    if (!this.validatorService.required(data.first_name)) {
      errors.first_name = this.errorService.required;
    }

    if (!this.validatorService.required(data.last_name)) {
      errors.last_name = this.errorService.required;
    }

    if (!this.validatorService.required(data.email)) {
      errors.email = this.errorService.required;
    } else if (!this.validatorService.email(data.email)) {
      errors.email = this.errorService.email;
    }

    if (!this.validatorService.required(data.password)) {
      errors.password = this.errorService.required;
    } else if (!this.validatorService.min(data.password, 8)) {
      errors.password = this.errorService.min(8);
    } else if (!this.validatorService.max(data.password, 16)) {
      errors.password = this.errorService.max(16);
    }

    if (!this.validatorService.required(data.confirmar_password)) {
      errors.confirmar_password = this.errorService.required;
    } else if (!this.validatorService.min(data.confirmar_password, 8)) {
      errors.confirmar_password = this.errorService.min(8);
    } else if (!this.validatorService.max(data.confirmar_password, 16)) {
      errors.confirmar_password = this.errorService.max(16);
    }

    //CURP

    if (!this.validatorService.required(data.rfc)) {
      errors.rfc = this.errorService.required;
    } else if (!this.validatorService.min(data.rfc, 10)) {
      errors.rfc = this.errorService.min(10);
    } else if (!this.validatorService.max(data.rfc, 13)) {
      errors.rfc = this.errorService.max(13);
    }

    if (!this.validatorService.required(data.curp)) {
      errors.curp = this.errorService.required;
    } else if (!this.validatorService.min(data.curp, 18)) {
      errors.curp = this.errorService.min(18);
    } else if (!this.validatorService.max(data.curp, 18)) {
      errors.curp = this.errorService.max(18);
    }

    //EDAD
    if (!this.validatorService.required(data.edad)) {
      errors.edad = this.errorService.required;
    }

    //TELEFONO
    if (!this.validatorService.required(data.telefono)) {
      errors.telefono = this.errorService.required;
    } else if (!this.validatorService.min(data.telefono, 10)) {
      errors.telefono = this.errorService.min(10);
    } else if (!this.validatorService.max(data.telefono, 10)) {
      errors.telefono = this.errorService.max(10);
    }

    //Ocupacion
    if (!this.validatorService.required(data.ocupacion)) {
      errors.ocupacion = this.errorService.required;
    }
    
    return errors;

  }

  //Servicio para registrar un nuevo usuario

  public registrarUsuario(data:any) : Observable <any> {
    // Your code here
    return this.http.post<any>(`${environments.url_api}/users/`, data, httpOptions)
  }
}
