import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
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
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';

//Providers o servicios
import { FrutaService } from './providers/fruta.service';
import { LoginService } from './providers/login.service';

//Pipes
import { OfertaPipe } from './pipes/oferta.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Guards
import { ZonaPrivadaGuard } from './guards/zona-privada.guard';


@NgModule({
  declarations: [
    AppComponent,
    ComparadorComponent,
    FrutaCardComponent,
    Page404Component,
    ListadoComponent,
    FormularioComponent,
    LoginComponent,
    OfertaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  //Banana in a Box [(ngModule)]
    ReactiveFormsModule,
    HttpClientModule,  //Peticiones Http
    Ng2SearchPipeModule
  ],
  providers: [
    FrutaService,
    LoginService,
    ZonaPrivadaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
