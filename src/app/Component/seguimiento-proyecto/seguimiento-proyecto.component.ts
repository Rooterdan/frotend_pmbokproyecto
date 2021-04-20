import { Component, OnInit } from '@angular/core';
import { EntradactaService } from 'src/app/service/entradacta.service';

@Component({
  selector: 'app-seguimiento-proyecto',
  templateUrl: './seguimiento-proyecto.component.html',
  styleUrls: ['./seguimiento-proyecto.component.css']
})
export class SeguimientoProyectoComponent implements OnInit {

  public estado: boolean = false;

  public actaDeConstitucionDelProyecto:Boolean=false;
  public planParaLaDireccionDeProyectos:Boolean=false;
  public planificacionParaLaGestionDelAlcance:Boolean=false;

  constructor(public entradaDeActaServices: EntradactaService) { }

  ngOnInit(): void {
    this.referencia()
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
    if(data.acta== true &&
      data.casoNegocioValidate== true &&
      data.entradactaValidate== true &&
      data.herramientasValidate== true &&
      data.planValidate== true){
        this.actaDeConstitucionDelProyecto=true;

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

      },
      err => {
        console.log('error en referencia ');
        console.log(err);
        console.log(err.err);

      }
    );

  }
}
