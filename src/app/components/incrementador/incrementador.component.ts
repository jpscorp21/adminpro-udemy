import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // ES UNA REFERENCIA A UN ELEMENTO HTML
  @ViewChild('txtProgress') txtProgress: ElementRef;

  // VALORES DE ENTRADA RECIBIDOS DE UN COMPONENTE PADRE
  // VALOR POR DEFECTO
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  // EMITE UN VALOR DE TIPO NUMBER
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {

  }

  onChanges(newValue: number) {

    // console.log(event);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    // CAMBIA EL VALOR DEL ELEMENTO SELECCIONADO
    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);

  }

  cambiarValor( valor: number ) {

    if (this.porcentaje > 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje += valor;

    // EMITE EL VALOR DEL PROGRESO CON EL VALOR ACTUAL
    this.cambioValor.emit(this.porcentaje);

    this.txtProgress.nativeElement.focus();
  }

}
