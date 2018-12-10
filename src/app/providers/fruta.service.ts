import { Injectable } from '@angular/core';
import { Fruta } from '../model/fruta';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  frutas: Fruta[];
  endpoint: string = 'http://localhost:3000/frutas';

  constructor(public http: HttpClient) {
    console.log('FrutaService constructor');
    this.frutas = [];
  }

  getAll():Observable<any>{
    console.trace(`FrutaService getAll ${this.endpoint}`);
    return this.http.get(this.endpoint);
  }

  getById(id: number):Observable<any>{
    let uri = this.endpoint + '/' + id;
    console.trace('FrutaService getById ' + uri);
    return this.http.get(uri);
  }

  crear(fruta: Fruta): Observable<any>{

    console.trace('FrutaService crear %o', fruta);

    let body = 	{
      "nombre": fruta.nombre,
      "precio": fruta.precio,
      "calorias": fruta.calorias,
      "colores": fruta.colores,
      "oferta": fruta.oferta,
      "imagen": fruta.imagen,
      "descuento": fruta.descuento,
      "cantidad": fruta.cantidad
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Conten-Type': 'application/json'
      })
    };

    return this.http.post(this.endpoint, body, httpOptions);

  }
  

  modificar(fruta: Fruta): Observable<any>{

    console.trace('FrutaService modificar %o', fruta);

    let uri = this.endpoint + '/' + fruta.id;

    console.trace('uri');

    let body = 	{
      "nombre": fruta.nombre,
      "precio": fruta.precio,
      "calorias": fruta.calorias,
      "colores": fruta.colores,
      "oferta": fruta.oferta,
      "imagen": fruta.imagen,
      "descuento": fruta.descuento,
      "cantidad": fruta.cantidad
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Conten-Type': 'application/json'
      })
    };

    return this.http.put(uri, body, httpOptions);

  }

  eliminar(id: number):Observable<any>{

    let uri = this.endpoint + '/' + id;
    console.trace('FrutaService eliminar');
    return this.http.delete(uri);

  }


}
