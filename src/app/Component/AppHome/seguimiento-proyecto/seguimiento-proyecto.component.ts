import { Component, OnInit } from '@angular/core';
import { EntradactaService } from 'src/app/service/entradacta.service';
import { PdpServicesService } from 'src/app/service/PdpService/pdp-services.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { PgaServiceService } from 'src/app/service/PgaService/pga-service.service';

@Component({
  selector: 'app-seguimiento-proyecto',
  templateUrl: './seguimiento-proyecto.component.html',
  styleUrls: ['./seguimiento-proyecto.component.css']
})
export class SeguimientoProyectoComponent implements OnInit {

  public estado: boolean = false;


  public actaDeConstitucionDelProyecto: Boolean = false;
  public planParaLaDireccionDeProyectos: Boolean = false;
  public planificacionParaLaGestionDelAlcance: Boolean = false;

  public checkEstadoActaActivo: Boolean = false;
  public checkEstadoPdpActivo: Boolean = false;
  public checkEstadoPgaActivo: Boolean = false;
  public checkEstadoPgcActivo: Boolean = false;


  public panelOpenState = false;

  /*
  acta
  casoNegocioValidate
  entradactaValidate
  herramientasValidate
  planValidate*/
  constructor(
    public spinnerService: NgxSpinnerService,
    public entradaDeActaServices: EntradactaService,
    public pgaServiceService: PgaServiceService,
    public pdpServicesService: PdpServicesService

  ) { }

  ngOnInit(): void {

    // Validan si ya se cumplio el registo de datos por cada uno de los modulos
    this.spinnerService.show();
    setTimeout(() => {
      console.log('cargando');
      this.validarActa();

      // ***************************

      this.spinnerService.hide();
    }, 2000);
  }

  /*******************************************        */
  async validarActa() {
    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    await this.entradaDeActaServices.validarValoresActa(idProyecto).subscribe(
      data => {
        localStorage.setItem('datosActa', JSON.stringify(data));
        this.validarPDP();
      },
      err => {
        console.log('error en referencia ');
        console.log(err);
        console.log(err.err);
      }
    );


  }
  async validarPDP() {
    console.log('----------  validarPDP() {()');
    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);

    await this.pdpServicesService.validarPdp(idProyecto).subscribe(
      data => {
        localStorage.setItem('datosPDP', JSON.stringify(data));
        this.ValidarPGA();
      }, err => {
        console.log('error en referencia ');
        console.log(err);
        console.log(err.err);

      }
    );


  }
  async ValidarPGA() {
    console.log(' ValidarPGA() { ');
    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    await this.pgaServiceService.validarPga(idProyecto).subscribe(
      data => {
        localStorage.setItem('datosPGA', JSON.stringify(data));
        this.VerificarEstados();
      }, err => {
        console.log('error en referencia ');
        console.log(err);
        console.log(err.err);

      }
    );

  }
  /*******************************************        */
  VerificarEstados() {
    /*
    actaDeConstitucionDelProyecto
    planParaLaDireccionDeProyectos
    planificacionParaLaGestionDelAlcance
    
    checkEstadoActaActivo
    checkEstadoPdpActivo
    checkEstadoPgaActivo
    */

    this.actaDeConstitucionDelProyecto = false;
    this.planParaLaDireccionDeProyectos = false;
    this.planificacionParaLaGestionDelAlcance = false;

    this.checkEstadoActaActivo = false;
    this.checkEstadoPdpActivo = false;
    this.checkEstadoPgaActivo = false;

    var data1 = JSON.parse(localStorage.getItem('datosActa') || '{}');
    var data2 = JSON.parse(localStorage.getItem('datosPDP') || '{}');
    var data3 = JSON.parse(localStorage.getItem('datosPGA') || '{}');

    if (data1.acta &&
      data1.casoNegocioValidate &&
      data1.entradactaValidate &&
      data1.herramientasValidate &&
      data1.planValidate
    ) {
      console.log('datosActa FULL');
      
      this.actaDeConstitucionDelProyecto = true;
      this.checkEstadoActaActivo = true;
      this.checkEstadoPdpActivo = false;
      
      if (data2.entradactaPdpValidate
        && data2.herramientasPdpValidate
        && data2.pdp) {
          console.log('datosPDP FULL');
        this.checkEstadoPdpActivo = true;
        this.planParaLaDireccionDeProyectos = false;
        this.planificacionParaLaGestionDelAlcance=true;

        if (
          data3.entradactaPgaValidate &&
          data3.herramientasPgaValidate &&
          data3.pga
        ) {
          console.log('datosPGA FULL');
          this.checkEstadoPgaActivo = true;
          this.planificacionParaLaGestionDelAlcance = false;

        }
      }
    }
  }

}
