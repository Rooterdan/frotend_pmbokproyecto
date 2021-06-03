import { Component, OnInit } from '@angular/core';
import { EntradactaService } from 'src/app/service/entradacta.service';
import { PdpServicesService } from 'src/app/service/PdpService/pdp-services.service';
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
  constructor(public entradaDeActaServices: EntradactaService,
    public pgaServiceService: PgaServiceService,
    public pdpServicesService: PdpServicesService

  ) { }

  ngOnInit(): void {
    this.validarActa();
    this.validarPDP();
    this.ValidarPGA();


  }

  /*******************************************        */
  async validarActa() {
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
  async validarPDP() {
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
  async ValidarPGA() {
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
      this.actaDeConstitucionDelProyecto = true;
      this.checkEstadoActaActivo = true;
      this.checkEstadoPdpActivo = false;
      this.planParaLaDireccionDeProyectos = true;
      if (data2.entradactaPdpValidate
        && data2.herramientasPdpValidate
        && data2.pdp) {
        this.checkEstadoPdpActivo = true;
        this.planParaLaDireccionDeProyectos = false;

        if (
          data3.entradactaPgaValidate &&
          data3.herramientasPgaValidate &&
          data3.pga
        ) {
          this.checkEstadoPgaActivo = false;
          this.planificacionParaLaGestionDelAlcance = true;

        }
      }
    }
  }

}
