import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.route';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ // LOS COMPONENTES A TRABAJAR
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    NopagefoundComponent,
    PagesComponent
  ], // PARA QUE SEAN ACCEDIDAS POR TODA LA APLICACION
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    NopagefoundComponent,
    PagesComponent
  ]
})

export class PagesModule {}


