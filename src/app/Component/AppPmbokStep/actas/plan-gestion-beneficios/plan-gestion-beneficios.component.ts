import { Component, OnInit } from '@angular/core';
import { PlanGestioBeneficio } from 'src/app/domain/plangestionbeneficio';
import { Router } from '@angular/router';
import { EntradactaService } from 'src/app/service/Actas/entradacta.service';
import { PlangestionbeneficioService } from 'src/app/service/Actas/plangestionbeneficio.service';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-plan-gestion-beneficios',
  templateUrl: './plan-gestion-beneficios.component.html',
  styleUrls: ['./plan-gestion-beneficios.component.css']
})
export class PlanGestionBeneficiosComponent implements OnInit {
  public planObje !: PlanGestioBeneficio;


  public acciones: boolean = true;
  public componentes: boolean = true;
  public prodcutos: boolean = true;
  public servicios: boolean = true;
  public resultado: boolean = true;
  public messages: string[] = [""];

  public cargaEnable:boolean=true;


  constructor(
    public router: Router,
    public planesService: PlangestionbeneficioService,
    public entradactaService: EntradactaService,
    public spinnerService : NgxSpinnerService,
    public planService:PlangestionbeneficioService

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
    
    this.planObje = new PlanGestioBeneficio(0, 0, "", "", "", "","",false,"");

  }
  public guardarPlan() {
    console.log(this.planObje.acciones);
    console.log(this.planObje.componentes);
    console.log(this.planObje.prodcutos);
    console.log(this.planObje.servicios);
    console.log(this.planObje.resultado);
    var variable = JSON.parse(localStorage.getItem("datosActa") || '{}');

    let x  = localStorage.getItem("entradaActaId");
    var idActa = Number(x);
    this.planObje.idEntradaActa = idActa;
    if(this.planObje.idEntradaActa != 0){
      console.log( this.planObje);
      this.planesService.save(this.planObje).subscribe(
        ok => {
           
          console.table(ok);
          var datosSacados = localStorage.getItem("datosActa") || {};
          //window.alert("Nuevo Plan de Gestión se ha grabado  " +  datosSacados);

          variable.planValidate = true;
          localStorage.setItem("datosActa", JSON.stringify(variable) );

          window.location.reload();
   
        },
        err => {
          console.log(err.error.error);
  
          this.messages = err.error.error;
        }
      );
    }else{
      window.alert('error en el identificador de las entradas');
    }


  }


  public buscarherramientasPorActa() {
    //Se debe tener previamente cargado el ID del acta  para hacer un FindByAI

    var idproyecto = JSON.parse(localStorage.getItem('idproyecto') || '{}');
    //console.log('->>>>>',idproyecto);
    this.planService.findplanGestionDelActa(idproyecto).subscribe(
      data => {
        //console.log('->>>>> buscarherramientasPorActa');
       // console.log(data);
       if(data[0]!=null){
        this.planObje = data[0];
        console.table(this.planObje);
        }
      },

      err => {
        console.log(err.error.error);
        window.alert('Plan gestion Beneficios ' + err.error.error);

      }
    );
  }


  public updatePlan() {
    this.planService.update(this.planObje).subscribe(
      data => {
        console.log('data ->>>', data);
        this.planObje = data;
        window.alert('Plan gestion Beneficios actualizada');
        window.location.reload();

      }, err => {
        console.log(err.error.error);
      });
  }

  public guardaracciones() {
    console.log('GUARDARacciones');
    this.acciones = false;

  }
  public guardarcomponentes() {
    console.log('comGUARDARponentes');
    this.componentes = false;

  }
  public guardarprodcutos() {
    console.log('pGUARDARrodcutos');
    this.prodcutos = false;

  }
  public guardarservicios() {
    console.log('sGUARDARervicios');
    this.servicios = false;

  }
  public guardarresultado() {
    console.log('rGUARDAResultado');
    this.resultado = false;

  }

}
