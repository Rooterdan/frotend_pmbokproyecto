import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './Component/AppComponent/app.component';
import { LoginComponent } from './Component/AppAuth/login/login.component';
import { RegisterComponent } from './Component/AppAuth/register/register.component';
import { HomeComponent } from './Component/AppHome/Home/home.component';
import { ProyectoSaveComponent } from './Component/AppHome/proyecto-save/proyecto-save.component';
import { SeguimientoProyectoComponent } from './Component/AppHome/seguimiento-proyecto/seguimiento-proyecto.component';
import { ProyectosComponent } from './Component/AppHome/proyectos/proyectos.component';
import { MisProyectosComponent } from './Component/AppHome/mis-proyectos/mis-proyectos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActasComponent } from './Component/AppPmbokStep/actas/actas.component';
import { EntradasComponent } from './Component/AppPmbokStep/actas/entradas/entradas.component';
import { CasoNegocioComponent } from './Component/AppPmbokStep/actas/caso-negocio/caso-negocio.component';
import { PlanGestionBeneficiosComponent } from './Component/AppPmbokStep/actas/plan-gestion-beneficios/plan-gestion-beneficios.component';
import { HerramientasActaComponent } from './Component/AppPmbokStep/actas/herramientas-acta/herramientas-acta.component';
//
import { FilterProyectoPipe } from './pipes/filter-proyecto.pipe';
//
import { DialogComponent } from './Component/AppDialog/dialog.component';
//import {MatTableModule} from '@angular/material/table';
 
import { EntradaComponent } from './Component/AppPresentacion/actas/entrada/entrada.component';
import { HerramientasComponent } from './Component/AppPresentacion/actas/herramientas/herramientas.component';
import { CasoNegociosComponent } from './Component/AppPresentacion/actas/caso-negocios/caso-negocios.component';
import { ActasVistaComponent } from './Component/AppPresentacion/actas/actas-vista/actas-vista.component';
import { PlanGestionComponent } from './Component/AppPresentacion/actas/plan-gestion/plan-gestion.component';



import { HeramientasPdpComponent } from './Component/AppPmbokStep/pdp/heramientas-pdp/heramientas-pdp.component';
 

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterilaModule } from "./material.modules";
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule} from '@angular/material/input';
import { NgxSpinnerModule} from 'ngx-spinner';
import { InterceptorService } from './service/interceptor.service';
import { MatIconModule} from '@angular/material/icon';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule} from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
 

import { FlexLayoutModule} from '@angular/flex-layout';
import { EntradaspdpComponent } from './Component/AppPmbokStep/pdp/entradaspdp/entradaspdp.component';
import { PdpComponent } from './Component/AppPmbokStep/pdp/pdp.component';
import { SalidasProcesosPdpComponent } from './Component/AppPmbokStep/pdp/salidas-procesos-pdp/salidas-procesos-pdp.component';
import { PgaComponent } from './Component/AppPmbokStep/pga/pga.component';
import { EntradaspgaComponent } from './Component/AppPmbokStep/pga/entradaspga/entradaspga.component';
import { HerramientapgaComponent } from './Component/AppPmbokStep/pga/herramientapga/herramientapga.component';
 

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PdpComponent,
    EntradaspdpComponent,
    HeramientasPdpComponent,
    HomeComponent,
    ProyectoSaveComponent,
    SeguimientoProyectoComponent,
    ProyectosComponent,
    MisProyectosComponent,
    ActasComponent,
    EntradasComponent,
    CasoNegocioComponent,
    PlanGestionBeneficiosComponent,
    HerramientasActaComponent,
    EntradaComponent,
    HerramientasComponent,
    CasoNegociosComponent,
    ActasVistaComponent,
    PlanGestionComponent,

    EntradaspdpComponent,
    HeramientasPdpComponent,
  
 
    DialogComponent,
 
    FilterProyectoPipe,
    EntradaspdpComponent,
    SalidasProcesosPdpComponent,
    PgaComponent,
    EntradaspgaComponent,
    HerramientapgaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //---------------------
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,  
    MatInputModule,
    NgxSpinnerModule,
    //Agnular Material
    MaterilaModule,
    MatFormFieldModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    //MatTableModule
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    NgxSpinnerModule,
  
    MatIconModule,
    MatExpansionModule,
    MDBBootstrapModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,

    MatMenuModule,

   
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
