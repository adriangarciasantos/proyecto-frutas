import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})

export class ComparadorComponent implements OnInit {

  private _frutas: Fruta[];
  private _fruta1: Fruta;
  private _fruta2: Fruta;
  private _precioTotal: number;
  private _carritoCompra: Fruta[];


  /*FrutaService es @Injectable por lo cual debemos declararlo en el constructor, 
  nunca haremos un NEW y no usarlo dentro del constructor, mejor en ngOnInit */
  constructor( public frutaService: FrutaService) {
    console.trace('ComparadorComponent constructor');

    this.frutas = [];
    this.fruta1 = new Fruta();
    this.fruta2 = new Fruta();
    this.precioTotal = 0;
    this.carritoCompra = [];

  }

  ngOnInit() {
    console.trace('ComparadorComponent ngOnInit');

    //.subscribe ES ASÍNCRONO
    this.frutaService.getAll().subscribe(data =>{
      console.debug('Frutas recibidas %o', data);
      this.frutas = data.map(el => el);
      this.fruta1 = this.frutas[0];
      this.fruta2 = this.frutas[1];
    });
  }

  cambiarFruta(f: Fruta){
    console.trace('ComparadorComponent cambiarFruta');
    this.fruta2 = this.fruta1;
    this.fruta1 = f;
  }

  actualizarCarro(event: Event){
    console.debug('ComparadorComponent actualizarCarro recibimos evento del componente hijo.');
    console.debug('Parámetro frutaClick = %o', event['frutaClick']);

    let fruta =  event['frutaClick'];

    fruta.cantidad++;
    let precio = fruta.precio - ((fruta.precio * fruta.descuento) / 100);
    this.precioTotal += precio * fruta.cantidad;

    let nombres = this.carritoCompra.map(el => el.nombre);

    let nombreEncontrado = nombres.find(n => n===fruta.nombre);

    if(nombreEncontrado != fruta.nombre){
      this.carritoCompra.push(fruta);
    }
    
  }

  sumarFruta(f: Fruta, index:number){
    f.cantidad++;
    this.carritoCompra[index] = f;
    let precio = f.precio - ((f.precio * f.descuento) / 100);
    this.precioTotal += precio;
  }

  restarFruta(f: Fruta, index:number){
    if(f.cantidad > 1){
      f.cantidad--;
      this.carritoCompra[index] = f;
      let precio = f.precio - ((f.precio * f.descuento) / 100);
      this.precioTotal -= precio;
    }
  }

  eliminarFruta(f: Fruta, index:number){
    let precio = f.precio - ((f.precio * f.descuento) / 100);
    this.precioTotal -= precio * f.cantidad;
    f.cantidad = 0;
    this.carritoCompra.splice(index, 1);
  }
  
  public get frutas(): Fruta[] {
    return this._frutas;
  }
  public set frutas(value: Fruta[]) {
    this._frutas = value;
  }
  
  public get fruta1(): Fruta {
    return this._fruta1;
  }
  public set fruta1(value: Fruta) {
    this._fruta1 = value;
  }

  public get fruta2(): Fruta {
    return this._fruta2;
  }
  public set fruta2(value: Fruta) {
    this._fruta2 = value;
  }

  public get precioTotal(): number {
    return this._precioTotal;
  }
  public set precioTotal(value: number) {
    this._precioTotal = value;
  }

  public get carritoCompra(): Fruta[] {
    return this._carritoCompra;
  }
  public set carritoCompra(value: Fruta[]) {
    this._carritoCompra = value;
  }

}
