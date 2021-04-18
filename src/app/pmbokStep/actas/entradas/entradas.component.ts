import { Component, OnInit } from '@angular/core';
import { EntradactaService } from 'src/app/service/entradacta.service';
import { ReunionService } from 'src/app/service/reunion.service';
import { EntradaActa } from 'src/app/domain/entradacta';
import { Reunion } from 'src/app/domain/reunion';
import { Actas } from 'src/app/domain/actas';
import { ActasService } from 'src/app/service/actas.service';

import { NgxSpinnerService } from "ngx-spinner";



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


  public cargaEnable: boolean = true;
  constructor(

    public entradactaService: EntradactaService,
    public reunionService: ReunionService,
    public actaService: ActasService,
    public spinnerService : NgxSpinnerService


  ) { }

  ngOnInit(): void {+
    this.spinnerService.show();
    this.cargaEnable = true;
    setTimeout(() => {
      console.log('cargando');
      this.spinnerService.hide();
      this.cargaEnable = false;
      
    }, 2000);

    this.entradaActa = new EntradaActa(0, "", "", "", 0);
    this.acta = new Actas(0, 0);


  }

  public guardarActa(): void {

    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    if (idProyecto > 0) {


      this.crearReunion(idProyecto);

      //this.crearActa();


    } else {
      window.alert('Seleccione un proyecto');
    }

  }

  public crearReunion(ProyectoId: number) {
    console.log('--------- public crearReunion(');
    this.reunion = new Reunion(0, "Reunion Generica", "Sin descripción", ProyectoId, 1);

    this.reunionService.save(this.reunion).subscribe(
      data => {
        console.log('data de reuniones para EL ACTA****');
        console.log('data Reuniones : ' + data.idreuniones);
        localStorage.setItem("idreunion", data.idreuniones);
        console.log('*************');
        console.log(localStorage.getItem("idreunion"));
        console.log('*************');
        this.crearActa(data.idreuniones);

      },

      err => {
        console.log('error en la reuniones', err.error.error);

        this.messages = err.error.error;
      }
    );

  }
  public xxx(cosa: any) {
    console.log('metodod xxx', cosa);

  }
  public crearActa(cosa: any) {

    console.log('--------- public crearActa(');
    console.log('-> reuniones en Acta', cosa);
    localStorage.setItem("idreunion", cosa);
    console.log('-> idReunionLoca ', localStorage.getItem("idreunion"));



    if (this.acta.idreuniones == null) {
      window.alert('ERROR EN EL IDENTIFICADOR DE LAS REUNIONES');
    } else {
      this.acta.idreuniones = cosa;
      console.log(this.acta);
      this.actaService.save(this.acta).subscribe(
        data => {
          console.log('data de creacion de un  ACTA');
          console.log(data);
          console.log(data.idactas);
          localStorage.setItem("idactas", data.idactas);
          this.crearEntrada(data.idactas);
        },
        err => {
          console.log('erroe en craciones del ACTA', err.error.error);

          this.messages = err.error.error;
        }
      );

    }
  }

  public crearEntrada(iDacta: any) {
    console.log('IDE DE LA ACTA PARA GRABAR LA ENTRADA DEL ACTA : ', iDacta)
    if (iDacta > 0) {
      this.entradaActa.identrada = 0;
      this.entradaActa.idActa = iDacta;
      /*public identrada:number,
        public acuerdos:string,
        public factores:string,
        public activosprocesos:string,
        public idActa:number*/
      console.log(this.entradaActa);

      this.entradactaService.save(this.entradaActa).subscribe(
        data => {
          console.log('data de ENTRADA DEL ACTA');
          console.log(data);
          this.grabarEntrada(data.identrada);
          window.alert("Nueva acta guardada ");
          
          
          window.location.reload();


        },
        err => {
          console.log('ERROR EN ENTRADA DEL ACTA',
            err.error.error);

          this.messages = err.error.error;
        }
      );
    } else {
      window.alert('error en el identificador del ACTA');
    }
  }
  public grabarEntrada(identrada: any){
    console.log('*** id de la entrdaa grabda:',identrada)
    localStorage.setItem("entradaActaId", String(identrada));
    console.log('**  id de la entrdaa grabda:',localStorage.getItem("entradaActaId"))
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
