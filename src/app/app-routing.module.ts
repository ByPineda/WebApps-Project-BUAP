import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { RegistrarProductoScreenComponent}  from './screens/registrar-producto-screen/registrar-producto-screen.component';
//Componentes

const routes: Routes = [
  {
    path: '',
    component: LoginScreenComponent,
  },
  {
    path: 'home',
    component: HomeScreenComponent,
  },
  {
    path: 'registro',
    component: RegistroScreenComponent,
  },
  {
    path: "nuevo-producto",
    component: RegistrarProductoScreenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
