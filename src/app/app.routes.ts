import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


/* DEFINE LAS RUTAS PRINCIPALES DE LA APLICACION */
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NopagefoundComponent},
];

/* CARGA TODAS LAS RUTAS EN EL MODULO PRINCIPAL */
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
