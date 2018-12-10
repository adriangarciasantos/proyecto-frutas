import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/providers/login.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  msg: string;

  constructor(private loginService: LoginService, private router: Router) {
    console.trace('LoginComponent constructor');
    this.crearFormulario();
    this.msg = '';
  }

  ngOnInit() {
    console.trace('LoginComponent ngOnInit');
  }

  private crearFormulario(){
    console.trace('LoginComponent crearFormulario');

    this.formulario = new FormGroup({

      nombre: new FormControl(
                              '',
                              [
                                Validators.required,
                                Validators.minLength(2),
                                Validators.maxLength(25)
                              ]),
      
      password: new FormControl(
                                '',
                                [
                                  Validators.required,
                                  Validators.minLength(5),
                                  Validators.maxLength(25)
                                ]
      )
    });

  }

  sumitar(){
    console.trace('LoginComponent sumitar');

    let nombre = this.formulario.controls.nombre.value;
    let password = this.formulario.controls.password.value;
    console.debug(`Nombre = ${nombre}, password = ${password}`);

    let u = new Usuario();
    u.nombre = nombre;
    u.password = password;

    if(this.loginService.login(u)){
      this.router.navigate(['listado']);

    }else{
      this.msg = 'Credenciales no válidas, por favor vuelva a intentarlo.';
    }

  }

}
