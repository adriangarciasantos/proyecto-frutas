import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { ComparadorComponent } from './components/comparador/comparador.component';

const routes: Routes = [

  {path: 'inicio', component: ComparadorComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
