import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { HomeComponent } from './Component/home/home.component';
import { ParticipacionComponent } from './Component/participacion/participacion.component';
import { ProyectoSaveComponent } from './Component/proyecto-save/proyecto-save.component';
import { ActaComponent } from './Component/acta/acta.component';
import { DireccionProyectoComponent } from './Component/direccion-proyecto/direccion-proyecto.component';
import { SeguimientoProyectoComponent } from './Component/seguimiento-proyecto/seguimiento-proyecto.component';
import { ProyectosComponent } from './Component/home/proyectos/proyectos.component';
import { MisProyectosComponent } from './Component/home/mis-proyectos/mis-proyectos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActasComponent } from './pmbokStep/actas/actas.component';
import { EntradasComponent } from './pmbokStep/actas/entradas/entradas.component';
import { CasoNegocioComponent } from './pmbokStep/actas/caso-negocio/caso-negocio.component';
import { PlanGestionBeneficiosComponent } from './pmbokStep/actas/plan-gestion-beneficios/plan-gestion-beneficios.component';
import { HerramientasActaComponent } from './pmbokStep/actas/herramientas-acta/herramientas-acta.component';
//
import { FilterProyectoPipe } from './pipes/filter-proyecto.pipe';
//
import { DialogComponent } from './Component/dialog/dialog.component';
//import {MatTableModule} from '@angular/material/table';
 
import { EntradaComponent } from './presentacion/actas/entrada/entrada.component';
import { HerramientasComponent } from './presentacion/actas/herramientas/herramientas.component';
import { CasoNegociosComponent } from './presentacion/actas/caso-negocios/caso-negocios.component';
import { ActasVistaComponent } from './presentacion/actas/actas-vista/actas-vista.component';
import { PlanGestionComponent } from './presentacion/actas/plan-gestion/plan-gestion.component';
import {MatButtonModule} from '@angular/material/button';
import { VentanaComponent } from './Component/ventana/ventana.component';



import { PdpComponent } from './Component/pdp/pdp.component';
import { HeramientasPdpComponent } from './pmbokStep/pdp/heramientas-pdp/heramientas-pdp.component';
 
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
 
import { FlexLayoutModule} from '@angular/flex-layout';
import { EntradaspdpComponent } from './pmbokStep/pdp/entradaspdp/entradaspdp.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ParticipacionComponent,
    ProyectoSaveComponent,
    ActaComponent,
    DireccionProyectoComponent,
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

    PdpComponent,
    EntradaspdpComponent,
    HeramientasPdpComponent,
  
 
    DialogComponent,
 
    FilterProyectoPipe,
    EntradaspdpComponent,
 
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
   
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
