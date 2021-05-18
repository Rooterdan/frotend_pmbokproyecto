import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionProyectoComponent } from './Component/AppHome/direccion-proyecto/direccion-proyecto.component';
import { HomeComponent } from './Component/AppHome/Home/home.component';
import { MisProyectosComponent } from './Component/AppHome/mis-proyectos/mis-proyectos.component';
import { ProyectosComponent } from './Component/AppHome/proyectos/proyectos.component';
import { LoginComponent } from './Component/AppAuth/login/login.component';
import { ProyectoSaveComponent } from './Component/AppHome/proyecto-save/proyecto-save.component';
import { RegisterComponent } from './Component/AppAuth/register/register.component';
import { SeguimientoProyectoComponent } from './Component/AppHome/seguimiento-proyecto/seguimiento-proyecto.component';


import { AuthGuard } from './guard/auth.guard';
import { ActasComponent } from './Component/AppPmbokStep/actas/actas.component';
import { EntradasComponent } from './Component/AppPmbokStep/actas/entradas/entradas.component';
import { CasoNegocioComponent } from './Component/AppPmbokStep/actas/caso-negocio/caso-negocio.component';
import { HerramientasActaComponent } from './Component/AppPmbokStep/actas/herramientas-acta/herramientas-acta.component';
import { PlanGestioBeneficio } from './domain/plangestionbeneficio';

import { ActasVistaComponent } from './Component/AppPresentacion/actas/actas-vista/actas-vista.component';
import { EntradaComponent } from './Component/AppPresentacion/actas/entrada/entrada.component';
import { HerramientasComponent } from './Component/AppPresentacion/actas/herramientas/herramientas.component';
import { PlanGestionComponent } from './Component/AppPresentacion/actas/plan-gestion/plan-gestion.component';
import { CasoNegociosComponent } from './Component/AppPresentacion/actas/caso-negocios/caso-negocios.component';
import { EntradaspdpComponent } from './Component/AppPmbokStep/pdp/entradaspdp/entradaspdp.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'seguimiento-proyecto', component: SeguimientoProyectoComponent, canActivate: [AuthGuard] },
  { path: 'direccion', component: DireccionProyectoComponent, canActivate: [AuthGuard] },
  { path: 'proyecto-save', component: ProyectoSaveComponent, canActivate: [AuthGuard] },
  { path: 'misproyectos', component: MisProyectosComponent, canActivate: [AuthGuard] },
  { path: 'proyectos', component: ProyectosComponent, canActivate: [AuthGuard] },
  /**
   * actas de inicion
   */
  { path: 'Actas', component: ActasComponent},
  { path: 'actas/entradas', component: EntradasComponent},
  { path: 'actas/entradas/caso-negocio', component: CasoNegocioComponent },
  { path: 'actas/entradas/plan-gestion-beneficio', component: PlanGestioBeneficio },
  { path: 'actas/herramientas', component: HerramientasActaComponent},
  /**
   * Vistas de presentacion de Informacion de las Actas
   */

  { path: 'vistaActas', component: ActasVistaComponent },
  { path: 'vistaActas/entradas', component: EntradaComponent },
  { path: 'vistaActas/entradas/caso-negocio', component: CasoNegociosComponent },
  { path: 'vistaActas/entradas/plan-gestion-beneficio', component: PlanGestionComponent },
  { path: 'vistaActas/herramientas', component: HerramientasComponent },

  /**
   * Fin actas de inicion
   */

  /**
   *  PDP
   * 
   */
   { path: 'entradasPdp', component: EntradaspdpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
