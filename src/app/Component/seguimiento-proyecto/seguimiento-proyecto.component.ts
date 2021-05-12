import { Component, OnInit } from '@angular/core';
import { EntradactaService } from 'src/app/service/entradacta.service';

@Component({
  selector: 'app-seguimiento-proyecto',
  templateUrl: './seguimiento-proyecto.component.html',
  styleUrls: ['./seguimiento-proyecto.component.css']
})
export class SeguimientoProyectoComponent implements OnInit {

  public estado: boolean = false;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4387d353209f27a86543312d81ac3fe8ff191e09
  public actaDeConstitucionDelProyecto: Boolean = false;
  public planParaLaDireccionDeProyectos: Boolean = false;
  public planificacionParaLaGestionDelAlcance: Boolean = false;

  public checkEstadoActaVar:Boolean =false;
  public checkEstadoPdpVar:Boolean =false;
  public checkEstadoPgaVar:Boolean =false;
  public checkEstadoPgcVar:Boolean =false;

  public checkEstadoActaActivo:Boolean =false;
  public checkEstadoPdpActivo:Boolean =false;
  public checkEstadoPgaActivo:Boolean =false;
  public checkEstadoPgcActivo:Boolean =false;
<<<<<<< HEAD
=======
=======
  public actaDeConstitucionDelProyecto:Boolean=false;
  public planParaLaDireccionDeProyectos:Boolean=false;
  public planificacionParaLaGestionDelAlcance:Boolean=false;
  public panelOpenState = false;
>>>>>>> 7c2ad2bf020fac6a2dd66c9d66f909d3e2035000
>>>>>>> 4387d353209f27a86543312d81ac3fe8ff191e09
  constructor(public entradaDeActaServices: EntradactaService) { }

  ngOnInit(): void {
    this.referencia();
    this.checkEstadoActa();
  }

  public revisarEstados() {
    /*
    acta
    casoNegocioValidate
    entradactaValidate
    herramientasValidate
    planValidate*/
    var data = JSON.parse(localStorage.getItem('datosActa') || '{}');
    //console.log(JSON.parse());
    console.log(data);
    console.log(data.acta);
    console.log(data.casoNegocioValidate);
    console.log(data.entradactaValidate);
    console.log(data.herramientasValidate);
    console.log(data.planValidate);
    if (data.acta == true &&
      data.casoNegocioValidate == true &&
      data.entradactaValidate == true &&
      data.herramientasValidate == true &&
      data.planValidate == true) {
      this.actaDeConstitucionDelProyecto = true;

    }
  }

  async referencia() {
    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    await this.entradaDeActaServices.validarValoresActa(idProyecto).subscribe(
      data => {
        console.log('---------- referencia()');
        console.log(data);

        localStorage.setItem('datosActa', JSON.stringify(data));
        this.revisarEstados();
        this.checkEstadoActa();

      },
      err => {
        console.log('error en referencia ');
        console.log(err);
        console.log(err.err);

      }
    );

  }


  public checkEstadoActa() {
    var data = JSON.parse(localStorage.getItem('datosActa') || '{}');
    //console.log(JSON.parse());
    /*console.log(data);
    console.log(data.acta);
    console.log(data.casoNegocioValidate);
    console.log(data.entradactaValidate);
    console.log(data.herramientasValidate);
    console.log(data.planValidate);*/
    if (data.acta == true &&
      data.casoNegocioValidate == true &&
      data.entradactaValidate == true &&
      data.herramientasValidate == true &&
      data.planValidate == true) {
        this.checkEstadoActaActivo=true;


    }
  }

  public checkEstadoPdp() {

  }

  public checkEstadoPga() {

  }

  public checkEstadoPgc() {

  }


}
