import { Component, OnInit } from '@angular/core';
import { EntradactaService } from 'src/app/service/entradacta.service';
import { ReunionService } from 'src/app/service/reunion.service';
import { EntradaActa } from 'src/app/domain/entradacta';
import { Reunion } from 'src/app/domain/reunion';
import { Actas } from 'src/app/domain/actas';
import { ActasService } from 'src/app/service/actas.service';



@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  public entradaActa !: EntradaActa;
  public reunion !: Reunion;
  public acta !: Actas;

  public nombreReunion !: string;
  public descripcion !: string;
  public acuerdosEnable: boolean = true;
  public factoresEnable: boolean = true;
  public activosEnable: boolean = true;
  public messages: string[] = [""];
  constructor(

    public entradactaService: EntradactaService,
    public reunionService: ReunionService,
    public actaService: ActasService


  ) { }

  ngOnInit(): void {
    this.entradaActa = new EntradaActa(0, "", "", "", 0);
    this.acta = new Actas(0, 0);


  }

  public guardarActa(): void {
    /*
    pasos
    1. extraer en numero el id del proyecto 
      1.1 usar el id del proyecto para crear una reunion (predefinida)
      1.2 usar el id 1 de la fase como (Fase estatica, o generica)

    2. obtener el ID de la reunion y guardarla en el locasstore

    3. con la reunion realizada, ahora seguirá crear el ACTA del proyecto con el idReunion
    */
    console.log('0');
    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);

    if (idProyecto > 0) {

      console.log('->1');
      this.crearReunion(idProyecto);
      console.log('salio de reunion');
      this.crearActa();
      console.log('salio de crear acta');
      console.log('2');

      x = localStorage.getItem("idactas");
      var idActa = Number(x);
      if (idActa > 0) {
        this.entradaActa.idActa = idActa;
        /*public identrada:number,
          public acuerdos:string,
          public factores:string,
          public activosprocesos:string,
          public idActa:number*/
        this.entradaActa.identrada = 0;
        this.entradactaService.save(this.entradaActa).subscribe(
          data => {
            console.log('3');
            console.log(data);
            window.alert("Nueva acta guardada ");

            localStorage.setItem("entradaActaId", data.identrada);
            window.location.reload();


          },
          err => {
            console.log(err.error.error);

            this.messages = err.error.error;
          }
        );
      }else {
        window.alert('error en el identificador del ACTA');
      }
    } else {
      window.alert('Seleccione un proyecto');
    }

  }

  /*
    nO DEVUVLE IDREUNIONES
  */
  public crearReunion(ProyectoId: number) {
    /*
      public idreuniones:number,
      public nombreReunion:string,
      public descripcion:string,
      public ProyectoId:number,
      public FaseProyectoId:number,
    */
    console.log('crearReunion');
    this.reunion = new Reunion(0, "Reunion Generica", "Sin descripción", ProyectoId, 1);

    this.reunionService.save(this.reunion).subscribe(
      data => {
        console.log(data);

        this.messages[0] = "El Product Se grabo Correctamente";
        console.log('data: ' + data);
        console.log('data Reuniones : ' + data.idreuniones);
        localStorage.setItem("idreunion", data.idreuniones);
      },

      err => {
        console.log(err.error.error);

        this.messages = err.error.error;
      }
    );
  }

  /*
  Crear el Acta nos devuelce IDACTAS
  */
  public crearActa() {
    console.log('crearActa');
    let y = localStorage.getItem("idreunion");
    var idReunionLoca = Number(y);


    console.log("numero de la reunion  " + idReunionLoca);
    this.acta = new Actas(0, idReunionLoca);
    this.acta.idreuniones = idReunionLoca;
    console.log(this.acta);
    console.log('mandando nueva acta ');

    if (this.acta.idreuniones == null || this.acta.idreuniones == 0) {
      window.alert('ERROR EN EL IDENTIFICADOR DE LAS REUNIONES');
    } else {
      this.actaService.save(this.acta).subscribe(
        data => {
          console.log(data);

          this.messages[0] = "Se grabo Correctamente";
          console.log(data);
          console.log(data.idactas);
          localStorage.setItem("idactas", data.idactas);
        },
        err => {
          console.log(err.error.error);

          this.messages = err.error.error;
        }
      );
    }
  }




  public guardarAcuerdos() {
    console.log('++++++++++++++++++++++++');
    console.log(this.entradaActa.acuerdos);
    this.acuerdosEnable = false;
    /*identrada:number,
    acuerdos:string,
    factores:string,
    activosprocesos:string,
    idactas:number*/
  }
  public guardarFactores() {
    console.log('++++++++++++++++++++++++');
    console.log(this.entradaActa.factores);
    this.factoresEnable = false;

    /*identrada:number,
    acuerdos:string,
    factores:string,
    activosprocesos:string,
    idactas:number*/
  }
  public guardarActivos() {
    console.log('++++++++++++++++++++++++');
    console.log(this.entradaActa.activosprocesos);

    this.activosEnable = false;
    /*identrada:number,
    acuerdos:string,
    factores:string,
    activosprocesos:string,
    idactas:number*/
  }
}
