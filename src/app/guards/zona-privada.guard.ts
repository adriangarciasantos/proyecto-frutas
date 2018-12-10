import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../providers/login.service';

@Injectable({
  providedIn: 'root'
})
export class ZonaPrivadaGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router){
    console.trace('ZonaPrivadaGuard constructor');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.trace('ZonaPrivadaGuard canActivate');

      if(!this.loginService.isLogged()){
        this.router.navigate(['login']);
        return false;
      
      }
  
      return true;

  }
}
