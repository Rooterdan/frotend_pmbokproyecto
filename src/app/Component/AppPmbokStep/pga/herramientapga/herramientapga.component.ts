import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PgaHerramientas } from 'src/app/domain/pga/PgaHerramientas';
import { PgaServiceService } from 'src/app/service/PgaService/pga-service.service';
@Component({
  selector: 'app-herramientapga',
  templateUrl: './herramientapga.component.html',
  styleUrls: ['./herramientapga.component.css']
})
export class HerramientapgaComponent implements OnInit {

  public herramientasPGA  !: PgaHerramientas;

  public idherramientapga: boolean = true;
  public juicioexpertos: boolean = true;
  public analisis: boolean = true;

  public messages: string[] = [""];

  public cargaEnable: boolean = true;
  constructor(
    public router: Router,
    public pgaService: PgaServiceService
  ) { }

  ngOnInit(): void {
  }
  /*
  public guardarHerramientas() {
    console.log(this.herramientasPGA.idherramientapga);
    console.log(this.herramientasPGA.juicioexpertos);
    console.log(this.herramientasPGA.analisis);
    let x = localStorage.getItem("idactas");
    var idActa = Number(x);
    this.herramientasObje.idactas = idActa;
    var variable = JSON.parse(localStorage.getItem("datosActa") || '{}');

    if (idActa > 0) {
      this.herrmientasServices.save(this.herramientasObje).subscribe(
        ok => {
          variable.herramientasValidate = true;
          localStorage.setItem("datosActa", JSON.stringify(variable));
          window.alert("Nueva Herramientas del acta guardado  ");
          window.location.reload();

        },
        err => {
          console.log(err.error.error);

          this.messages = err.error.error;
        }
      );
    } else {
      window.alert('error en el identificador del ACTA');
    }


  }*/

  public juicioexpertosM(): void {
    this.juicioexpertos = false;
  }
  public analisisM(): void {
    this.analisis = false;
  }


}
