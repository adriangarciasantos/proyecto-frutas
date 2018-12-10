import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './fruta-card.component.html',
  styleUrls: ['./fruta-card.component.scss']
})
export class FrutaCardComponent implements OnInit {

  _fruta: Fruta;
  _fruta2?: Fruta; // ? opcional
  
  //Registrar evento de salida
  @Output() clickCompra = new EventEmitter;

  constructor() {
    console.trace('FrutaCardComponent constructor');

    /*
    this.fruta = new Fruta();
    this.fruta.nombre = 'Melocotón';
    this.fruta.calorias = 17.4;
    this.fruta.precio = 3.45;
    this.fruta.oferta = true;
    this.fruta.descuento = 10;
    this.fruta.imagen = './assets/img/melocoton.jpg';
    */

  }

  ngOnInit() {
    console.trace('FrutaCardComponent ngOnInit');
  }

  comprar(event: Event){
    console.trace('FrutaCardComponent comprar');
    //alert(`Lo sentimos pero de momento tenemos esta opción deshabilitada ${this.fruta.nombre}`);
    
    //TODO hacerlo con a href
    //event.preventDefault();

    //Emitimos evento al componente padre y enviamos parámetro 'frutaClick'
    this.clickCompra.emit( {frutaClick: this._fruta} );
  }
  
  get fruta(): Fruta {
    return this._fruta;
  }

  @Input('_fruta') set fruta(value: Fruta) {
    if(value){
      this._fruta = value;
    
    }else{
      console.debug('fruta undefined => new Fruta()');
      this._fruta = new Fruta();
    }
    
  }

  get fruta2(){
    return this._fruta2;
  }

  @Input('_fruta2') set fruta2(value: Fruta) {
    this._fruta2 = value;
  }

}
