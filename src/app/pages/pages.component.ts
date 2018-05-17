import { Component, OnInit } from '@angular/core';

//  ESTA LLAMANDO UNA FUNCION DE JAVASCRIPT FUERA DE ANGULAR
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
