import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActaComponent } from './Component/acta/acta.component';
import { DireccionProyectoComponent } from './Component/direccion-proyecto/direccion-proyecto.component';
import { HomeComponent } from './Component/home/home.component';
import { MisProyectosComponent } from './Component/home/mis-proyectos/mis-proyectos.component';
import { ProyectosComponent } from './Component/home/proyectos/proyectos.component';
import { LoginComponent } from './Component/login/login.component';
import { ParticipacionComponent } from './Component/participacion/participacion.component';
import { ProyectoSaveComponent } from './Component/proyecto-save/proyecto-save.component';
import { RegisterComponent } from './Component/register/register.component';
import { SeguimientoProyectoComponent } from './Component/seguimiento-proyecto/seguimiento-proyecto.component';


import { AuthGuard } from './guard/auth.guard';
import { ActasComponent } from './pmbokStep/actas/actas.component';
import { EntradasComponent } from './pmbokStep/actas/entradas/entradas.component';
import { CasoNegocioComponent } from './pmbokStep/actas/caso-negocio/caso-negocio.component';
import { HerramientasActaComponent } from './pmbokStep/actas/herramientas-acta/herramientas-acta.component';
import { PlanGestioBeneficio } from './domain/plangestionbeneficio';

 

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path: 'participacion', component:ParticipacionComponent,canActivate:[AuthGuard]},
  {path: 'seguimiento-proyecto', component:SeguimientoProyectoComponent,canActivate:[AuthGuard]},
  {path: 'direccion', component:DireccionProyectoComponent,canActivate:[AuthGuard]},
  {path: 'proyecto-save', component:ProyectoSaveComponent,canActivate:[AuthGuard]},
  {path:'acta',component:ActaComponent,canActivate:[AuthGuard]},
  {path:'misproyectos',component:MisProyectosComponent,canActivate:[AuthGuard]},
  {path:'proyectos',component:ProyectosComponent,canActivate:[AuthGuard]},
  /**
   * actas de inicion
   */
   {path:'Actas',component:ActasComponent,canActivate:[AuthGuard]},
   {path:'actas/entradas',component:EntradasComponent,canActivate:[AuthGuard]},
   {path:'actas/entradas/caso-negocio',component:CasoNegocioComponent,canActivate:[AuthGuard]},
   {path:'actas/entradas/plan-gestion-beneficio',component:PlanGestioBeneficio,canActivate:[AuthGuard]},
   {path:'actas/herramientas',component:HerramientasActaComponent,canActivate:[AuthGuard]},

  /**
   * Fin actas de inicion
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
