import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;  //Formulario para agrupar inputs == FormControl
  colores: FormArray;     //Array de FormControl
  msg: string;
  fruta: Fruta;

  constructor(public frutaService: FrutaService, private route: ActivatedRoute) {
    console.trace('FormularioComponent constructor');
    this.fruta = new Fruta();

    const patronImg: string = '^(http(s?):\/\/).+(\.(jpg|png|jpeg))$';

    //Agrupación de controles == formulario
    this.formulario = new FormGroup({
      nombre: new FormControl(
                              'Kiwi',            
                              [               
                                Validators.required,
                                Validators.minLength(2),
                                Validators.maxLength(50)
                              ]
                              ),
      precio: new FormControl(
                              '0',            //Valor inicial
                              [               //Validaciones
                                Validators.required,
                                Validators.min(0.01),
                                Validators.max(999)
                              ]
                              ),
      calorias: new FormControl(
                              '0',            
                              [               
                                Validators.required,
                                Validators.min(0.01),
                                Validators.max(999)
                              ]
                              ),
      oferta: new FormControl(false),
      imagen: new FormControl(
                              'https://picsum.photos/200/300/?random.png',            
                              [               
                                Validators.required,
                                Validators.pattern(patronImg)
                              ]
                              ),
      descuento: new FormControl(
                              '0',            //Valor inicial
                              [ 
                                Validators.min(0),
                                Validators.max(90)
                              ]
                              ),
      colores: new FormArray([this.crearColorFormGroup()], Validators.minLength(1))
    });

    this.msg = '';

  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
     //recoger parameros aqui, No constructor

    this.route.params.subscribe(params => {
      this.fruta.id = +params['id'];                 // (+) converts string 'id' to a number
        this.frutaService.getById(this.fruta.id).subscribe(data =>{ // llamar provider para conseguir datos a traves del id
          console.trace('FormularioComponent getById %o', data);
          this.fruta = data;
          this.cargarDatosFormulario();
        })                                     
    });
  }

  crearColorFormGroup(color?: string): FormGroup{

    if(color == undefined){
      color = 'Magenta';
    }

    return new FormGroup({
        color: new FormControl(
                              color, [
                              Validators.required, 
                              Validators.minLength(2), 
                              Validators.maxLength(15)
                              ])
    });
  }

  nuevoColor(){
    let arrayColores = this.formulario.get('colores') as FormArray;
    arrayColores.push(this.crearColorFormGroup());
  }

  eliminarColor(index: number){
    let arrayColores = this.formulario.get('colores') as FormArray;
    
    if(arrayColores.length > 1){
      arrayColores.removeAt(index);
    }
    
  }

  cargarDatosFormulario(){
    this.formulario.controls.nombre.setValue(this.fruta.nombre);
    this.formulario.controls.precio.setValue(this.fruta.precio);
    this.formulario.controls.calorias.setValue(this.fruta.calorias);

    this.formulario.controls.oferta.setValue(this.fruta.oferta);
    this.formulario.controls.descuento.setValue(this.fruta.descuento);
    this.formulario.controls.imagen.setValue(this.fruta.imagen);
    
    let arrayColores = this.formulario.get('colores') as FormArray;

    this.fruta.colores.forEach(color => {
      arrayColores.push(this.crearColorFormGroup(color));
    });

    this.formulario.controls.colores.setValue(this.fruta.colores);
  }

  sumitar(){
    console.trace('FormularioComponent sumitar %o', this.formulario);

    let fruta = new Fruta();
    fruta.id = this.fruta.id;
    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.colores.push(this.formulario.controls.colores.value);
    fruta.oferta = this.formulario.controls.oferta.value;
    fruta.imagen = this.formulario.controls.imagen.value;
    fruta.descuento = this.formulario.controls.descuento.value;
    fruta.cantidad = 0;

    if(this.fruta.id === -1){
        this.frutaService.crear(fruta).subscribe(data =>{
        console.debug('data %o', data);
        this.msg = `${fruta.nombre} creada correctamente`;
      });
    
    }else{
      this.frutaService.modificar(fruta).subscribe(data =>{
        console.debug('data %o', data);
        this.msg = `${fruta.nombre} modificada correctamente`;
      })
    }

    console.debug('Llamar provider pasando la fruta %o', fruta);

  }

  eliminar(id: number){
    console.debug('FormularioComponent eliminar -> ' + id);
    this.frutaService.eliminar(id).subscribe(data =>{
      console.debug('Fruta eliminada -> ' + data);
    })
  }

}
