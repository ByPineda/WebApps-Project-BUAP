import { Injectable } from '@angular/core';
import { ValidatorService } from '../service/tools/validator.service';
import { ErrorsService } from '../service/tools/errors.service';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(
    private errorService: ErrorsService,
    private validatorService: ValidatorService
  ) {}

  public esquemaProducto() {
    return {
      id: '',
      nombre_producto: '',
      descripcion: '',
      precio: '',
      departamento: '',
    };
  }

  public validarProducto(data: any) {
    console.log('Validando producto...', data);
    let errors: any = {};

    if (!this.validatorService.required(data.id)) {
      errors.id = this.errorService.required;
    }

    if (!this.validatorService.required(data.nombre_producto)) {
      errors.nombre_producto = this.errorService.required;
    } else if (!this.validatorService.max(data.nombre_producto,20)){
      errors.nombre_producto = this.errorService.max(20);
    }

    if (!this.validatorService.required(data.descripcion)) {
      errors.descripcion = this.errorService.required;
    }

    if (!this.validatorService.required(data.precio)) {
      errors.precio = this.errorService.required;
    } else if ( !this.validatorService.numeric(data.precio)) {
      errors.precio = this.errorService.numeric;
    }




    if (!this.validatorService.required(data.departamento)) {
      errors.departamento = this.errorService.required;
    } else if (!this.validatorService.min(data.departamento,5)){
      errors.departamento = this.errorService.min(5);
    } else if (!this.validatorService.max(data.departamento, 20)) {
      errors.departamento = this.errorService.max(20);
    }
    return errors;
  }
}
