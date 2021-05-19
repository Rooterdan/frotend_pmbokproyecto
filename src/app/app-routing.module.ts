import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Component/AppHome/Home/home.component';
import { MisProyectosComponent } from './Component/AppHome/mis-proyectos/mis-proyectos.component';
import { ProyectosComponent } from './Component/AppHome/proyectos/proyectos.component';
import { LoginComponent } from './Component/AppAuth/login/login.component';
import { ProyectoSaveComponent } from './Component/AppHome/proyecto-save/proyecto-save.component';
import { RegisterComponent } from './Component/AppAuth/register/register.component';
import { SeguimientoProyectoComponent } from './Component/AppHome/seguimiento-proyecto/seguimiento-proyecto.component';
//import { PlanGestioBeneficio } from './domain/plangestionbeneficio';
import { AuthGuard } from './guard/auth.guard';

/* AppPmbokStep ACTAS */
import { ActasComponent }            from './Component/AppPmbokStep/actas/actas.component';
import { EntradasComponent }         from './Component/AppPmbokStep/actas/entradas/entradas.component';
import { HerramientasActaComponent } from './Component/AppPmbokStep/actas/herramientas-acta/herramientas-acta.component';
import { CasoNegocioComponent }      from './Component/AppPmbokStep/actas/caso-negocio/caso-negocio.component';
/* AppPresentacion ACTAS */
import { ActasVistaComponent }   from './Component/AppPresentacion/actas/actas-vista/actas-vista.component';
import { EntradaComponent }      from './Component/AppPresentacion/actas/entrada/entrada.component';
import { HerramientasComponent } from './Component/AppPresentacion/actas/herramientas/herramientas.component';
import { CasoNegociosComponent } from './Component/AppPresentacion/actas/caso-negocios/caso-negocios.component';
import { PlanGestionComponent }  from './Component/AppPresentacion/actas/plan-gestion/plan-gestion.component';
/* AppPresentacion PDP */
import { EntradaspdpComponent }      from './Component/AppPmbokStep/pdp/entradaspdp/entradaspdp.component';
import { HeramientasPdpComponent }   from './Component/AppPmbokStep/pdp/heramientas-pdp/heramientas-pdp.component';
import { PdpComponent }              from './Component/AppPmbokStep/pdp/pdp.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  
  { path: 'misproyectos', component: MisProyectosComponent, canActivate: [AuthGuard] },
  { path: 'proyectos', component: ProyectosComponent, canActivate: [AuthGuard] },
  { path: 'proyecto-save', component: ProyectoSaveComponent, canActivate: [AuthGuard] },

  /**
   * actas de inicion
   */
  { path: 'Actas', component: ActasComponent},
  { path: 'actas/entradas', component: EntradasComponent},
  { path: 'actas/entradas/caso-negocio', component: CasoNegocioComponent },
  { path: 'actas/herramientas', component: HerramientasActaComponent},
  //{ path: 'actas/entradas/plan-gestion-beneficio', component: PlanGestioBeneficio },

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

   { path: 'seguimiento-proyecto', component: SeguimientoProyectoComponent, canActivate: [AuthGuard] },

  /**
   *  PDP
   * 
   */
   { path: 'Pdp', component: PdpComponent},
   { path: 'pdp/entradasPdp', component: EntradaspdpComponent },
   { path: 'pdp/herramientasPdp', component: HeramientasPdpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
