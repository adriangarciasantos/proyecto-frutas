import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { ZonaPrivadaGuard } from './guards/zona-privada.guard';

//, canActivate: [ZonaPrivadaGuard]

const routes: Routes = [

  {path: 'inicio', component: ComparadorComponent},
  {path: 'listado', component: ListadoComponent, canActivate: [ZonaPrivadaGuard]},
  {path: 'formulario/:id', component: FormularioComponent, canActivate: [ZonaPrivadaGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
