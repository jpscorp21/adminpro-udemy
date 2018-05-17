import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  // PARA CONTROLAR LAS SUBSCRIPCIONES
  subcription: Subscription;

  constructor() {

    // Se esta subcribiendo al observable
    // EL subscribe recibe 3 parametros el valor emitido, el error, y el complete
    this.subcription = this.regresaObservable()
      .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el (dos veces) ', error),
      () => console.log('El observador termino!')
    );

  }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {
    return new Observable(observer => {

      let contador = 0;

      const intervalo = setInterval(() => {

        contador += 1;

        const salida = {
          valor: contador
        };
        // NOTIFICA QUE LLEGO UN VALOR A LOS QUE ESTAN SUSCRITOS
        // SI SE CIERRA ENTONCES INICIA DE NUEVO SE CARGA UN NUEVO SUBCRIBER
        observer.next(salida);

        // EN CASO DE COMPLETARSE LLAMA AL METODO COMPLETE
        // if ( contador === 3 ) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        }, 500);
    }) // ENCADENANDO OPERADORES
    .retry(2) // FUNCIONA CUANDO DA ERROR
    .map((resp: any) => { // SI NO SE ESPECIFICA NADA ENTONCES IMPRIME UNDEFINED
      return resp.valor;
    })
    .filter((valor, index) => {
      return valor % 2 === 1;
    });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
