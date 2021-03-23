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

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path: 'participacion', component:ParticipacionComponent},
  {path: 'seguimiento-proyecto', component:SeguimientoProyectoComponent},
  {path: 'direccion', component:DireccionProyectoComponent},
  {path: 'proyecto-save', component:ProyectoSaveComponent},
  {path:'acta',component:ActaComponent},
  {path:'misproyectos',component:MisProyectosComponent},
  {path:'proyectos',component:ProyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
