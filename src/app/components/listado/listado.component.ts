import { Component, OnInit } from '@angular/core';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  frutas: Fruta[];

  constructor( public frutaService: FrutaService) {
    this.frutas = [];
  }

  ngOnInit() {
    this.cargarFrutas();
  }

  cargarFrutas(){
    this.frutaService.getAll().subscribe(data =>{
      console.debug('Frutas recibidas %o', data);
      this.frutas = data.map(el => el);
    });
  }

}