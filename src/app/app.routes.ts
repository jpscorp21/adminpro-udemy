import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

/* DEFINE LAS RUTAS PRINCIPALES DE LA APLICACION */
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

/* CARGA TODAS LAS RUTAS EN EL MODULO PRINCIPAL */
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
