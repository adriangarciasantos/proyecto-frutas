import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es';
registerLocaleData(localeFr);

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { Page404Component } from './components/page404/page404.component';

//Providers o servicios
import { FrutaService } from './providers/fruta.service';

//Guards

@NgModule({
  declarations: [
    AppComponent,
    ComparadorComponent,
    FrutaCardComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  //Banana in a Box [(ngModule)]
    ReactiveFormsModule,
    HttpClientModule  //Peticiones Http
  ],
  providers: [
    FrutaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
