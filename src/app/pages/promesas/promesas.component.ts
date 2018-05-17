import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {

    this.contarTres()
      .then(m => console.log('Termino ', m))
      .catch(() => console.log('Fallo'));
  }

  ngOnInit() {}

  contarTres(): Promise<boolean> {
    // LAS PROMESAS SIRVEN PARA TRABAJAR CON PROCESOS ASINCRONOS
    return new Promise((resolve, reject) => {
      let contador = 0;
      // ES UNA FUNCION QUE SE EJECUTA CADA SEGUNDO, LUEGO DE 3 SEGUNDOS RETORNA UNA RESPUESTA
      const itervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(itervalo);
        }
      }, 1000);
    });
  }
}
