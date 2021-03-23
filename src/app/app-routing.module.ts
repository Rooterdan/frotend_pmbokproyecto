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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
