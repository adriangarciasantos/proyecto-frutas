import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

const usuarioNombre = 'admin';
const usuarioPassword = 'admin';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  usuario: Usuario;

  constructor() {
    console.trace('LoginService constructor');
    
    this.usuario = undefined;

  }

  isLogged(): boolean{
    console.trace('LoginService isLogged');
    
    if(this.usuario){
      return true;
    
    }else{
      return false;
    }
  }

  logout(): void{
    console.trace('LoginService logout');
    this.usuario = undefined;
  }

  login(u: Usuario): boolean{
    console.trace('LoginService login %o ', u);

    if(u && u.nombre === usuarioNombre && u.password === usuarioPassword){
      this.usuario = u;
      console.debug('Usuario logeado');
      return true;
    
    }else{
      this.usuario = undefined;
      console.warn('Usuario no válido');
      return false;
    }

  }

}
