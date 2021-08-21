import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradactaService } from 'src/app/service/Actas/entradacta.service';
import { PdpServicesService } from 'src/app/service/PdpService/pdp-services.service';
import { PgaServiceService } from 'src/app/service/PgaService/pga-service.service';

@Component({
  selector: 'app-control-admin-user',
  templateUrl: './control-admin-user.component.html',
  styleUrls: ['./control-admin-user.component.css']
})
export class ControlAdminUserComponent implements OnInit {
  // window.location.reload();
  constructor(public router: Router,
    public entradaDeActaServices: EntradactaService,
    public pgaServiceService: PgaServiceService,
    public pdpServicesService: PdpServicesService) { }

  ngOnInit(): void {
    // Validan si ya se cumplio el registo de datos por cada uno de los modulos
    this.validarActa();
    this.validarPDP();
    this.ValidarPGA();
  }

  // {path: 'ControlAdminProject', component:AdminProjectComponent}, // Matricular Gente a un proyecto
  public ControlAdminProject(): void {
    console.log('public ControlAdminProject():void {');
    this.router.navigate(['/ControlAdminProject']);


  }
  // {path: 'ControlFases', component: AdminProjectFasesComponent }, // Agendar as reuniones con el grupo de trabajo

  public ControlFases(): void {
    console.log('public ControlFases():void{');
    this.router.navigate(['/ControlFases']);


  }
  // {path: 'Control-Reuniones-Por-Fase', component: ControlFasesComponent }, // Agendar as reuniones con el grupo de trabajo
  public ControlReunionesPorFase(): void {
    console.log('public ControlReunionesPorFase():void{');
    this.router.navigate(['/Control-Reuniones-Por-Fase']);
  }

  // { path: 'seguimiento-proyecto', component: SeguimientoProyectoComponent, canActivate: [AuthGuard] },
  public SeguimientoProyecto(): void {
    console.log('public SeguimientoProyecto():void{');
    this.router.navigate(['/seguimiento-proyecto']);
  }



  // Métodos implementados en seguimiento-proyecto 
  public async validarActa() {
    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    await this.entradaDeActaServices.validarValoresActa(idProyecto).subscribe(
      data => {
        localStorage.setItem('datosActa', JSON.stringify(data));
      },
      err => {
        console.log('error en referencia ');
        console.log(err);
        console.log(err.err);
      }
    );


  }

  public async validarPDP() {
    console.log('----------  validarPDP() {()');
    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);

    await this.pdpServicesService.validarPdp(idProyecto).subscribe(
      data => {
        localStorage.setItem('datosPDP', JSON.stringify(data));

      }, err => {
        console.log('error en referencia ');
        console.log(err);
        console.log(err.err);

      }
    );
  }

  public async ValidarPGA() {
    console.log(' ValidarPGA() { ');
    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    await this.pgaServiceService.validarPga(idProyecto).subscribe(
      data => {
        localStorage.setItem('datosPGA', JSON.stringify(data));

      }, err => {
        console.log('error en referencia ');
        console.log(err);
        console.log(err.err);

      }
    );
  }

}
