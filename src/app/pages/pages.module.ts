import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.route';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';


@NgModule({
  declarations: [ // LOS COMPONENTES A TRABAJAR
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    NopagefoundComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent
  ], // PARA QUE SEAN ACCEDIDAS POR TODA LA APLICACION
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    NopagefoundComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent
  ]
})

export class PagesModule {}


