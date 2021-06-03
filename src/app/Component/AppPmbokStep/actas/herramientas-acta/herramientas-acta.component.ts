import { Component, OnInit } from '@angular/core';
import { HerramientasActa } from 'src/app/domain/herramientasactas';
import { EntradactaService } from 'src/app/service/entradacta.service';
import { HerramientasactaService } from 'src/app/service/herramientasacta.service';

import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-herramientas-acta',
  templateUrl: './herramientas-acta.component.html',
  styleUrls: ['./herramientas-acta.component.css']
})
export class HerramientasActaComponent implements OnInit {
  public herramientasObje !: HerramientasActa;

  public juicioexpertos: boolean = true;
  public recopilaciondatos: boolean = true;
  public habilidades: boolean = true;
  public herramientareuniones: boolean = true;

  public messages: string[] = [""];

  public cargaEnable:boolean=true;
  
  constructor(
    public router: Router,
    public herrmientasServices: HerramientasactaService,
    public entradactaService: EntradactaService,
    public spinnerService : NgxSpinnerService,
    public herramientasService: HerramientasactaService


  ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.cargaEnable = true;
    setTimeout(() => {
      console.log('cargando');
      this.spinnerService.hide();
      this.cargaEnable = false;
      this.buscarherramientasPorActa();
      
    }, 2000);
    this.herramientasObje = new HerramientasActa(0, "", "", "", "", 0);
  }
  public guardarHerramientas() {
    console.log(this.herramientasObje.juicioexpertos);
    console.log(this.herramientasObje.recopilaciondatos);
    console.log(this.herramientasObje.habilidades);
    console.log(this.herramientasObje.herramientareuniones);
    let x = localStorage.getItem("idactas");
    var idActa = Number(x);
    this.herramientasObje.idactas = idActa;
    var variable = JSON.parse(localStorage.getItem("datosActa") || '{}');

    if (idActa > 0) {
      this.herrmientasServices.save(this.herramientasObje).subscribe(
        ok => {
          variable.herramientasValidate = true;
          localStorage.setItem("datosActa", JSON.stringify(variable) );
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


  }


  public buscarherramientasPorActa() {
  
    console.log('->>>>> buscarherramientasPorActa');
    var idproyecto = JSON.parse(localStorage.getItem('idproyecto') || '{}');
    console.log('->>>>>',idproyecto);
    this.herramientasService.findherramientaDelActa(idproyecto).subscribe(
      data => {
        console.log(data);
        if(data[0]!=null){
          this.herramientasObje = data[0];
        }
      },

      err => {
        console.log(err.error.error);
        window.alert('Herramientas ' + err.error.error);

      }
    );
  }


  public guardarjuicioexpertos() {
    console.log('juicioexpertos');
    this.juicioexpertos = false;
  }
  public guardarrecopilaciondatos() {
    console.log('recopilaciondatos');
    this.recopilaciondatos = false;
  }
  public guardarhabilidades() {
    console.log('habilidades');
    this.habilidades = false;
  }
  public guardarherramientareuniones() {
    console.log('herramientareuniones');
    this.herramientareuniones = false;
  }
}
