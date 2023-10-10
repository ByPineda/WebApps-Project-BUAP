import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../service/productos.service';
declare var $: any;

@Component({
  selector: 'app-registrar-producto-screen',
  templateUrl: './registrar-producto-screen.component.html',
  styleUrls: ['./registrar-producto-screen.component.scss'],
})
export class RegistrarProductoScreenComponent {
  public producto: any = {};
  public errors: any = {};

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    this.producto = this.productoService.esquemaProducto();
    //Imprimir datos en consola
    console.log('Producto: ', this.producto);
  }
  public regresar() {}

  public registrar() {
    this.errors = {};
    this.errors = this.productoService.validarProducto(this.producto);
    console.log("Registrando producto...", this.producto);

    if(!$.isEmptyObject(this.errors)){
      return false;
    }

  }
}
