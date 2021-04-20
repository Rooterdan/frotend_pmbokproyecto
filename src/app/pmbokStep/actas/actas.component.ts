import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { EntradactaService } from 'src/app/service/entradacta.service';

@Component({
  selector: 'app-actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.css']
})
export class ActasComponent implements OnInit {


  public entrada: boolean = false;
  public caso: boolean = false;
  public plan: boolean = false;
  public herramienta: boolean = false;

  public entradaVista: boolean = false;
  public casoVista: boolean = false;
  public planVista: boolean = false;
  public herramientaVista: boolean = false;


  constructor(
    public entradaDeActaServices:EntradactaService,
    ) { }

  ngOnInit(): void {
    console.log('***ngOnInit ActasComponent');
    this.RevisarAvances();
    
  }

  public disableOpciones() {
    if (
      localStorage.getItem('idactas') == null &&
      localStorage.getItem('idreunion') == null &&
      localStorage.getItem('entradaActaId') == null 
    ) {
      return true

    }else{
      return false;
    }


  }
  public entradaM(): void {
    this.falseTotal();
    this.entradaVista = true;
  }
  public casoM(): void {
    this.falseTotal();
    this.casoVista = true;
  }
  public planM(): void {
    this.falseTotal();
    this.planVista = true;
  }
  public herramientaM(): void {
    this.falseTotal();
    this.herramientaVista = true;
  }

  public falseTotal(): void {
    this.entradaVista = false;
    this.casoVista = false;
    this.planVista = false;
    this.herramientaVista = false;

  }
  public RevisarAvances():void{    
    var datos = JSON.parse(localStorage.getItem('datosActa') || '{}');
   
    if( datos.acta){
      console.log('********************* public RevisarAvances():void{'  );
      console.log(datos.casoNegocioValidate);
      console.log(datos.entradactaValidate);
      console.log(datos.herramientasValidate);
      console.log(datos.planValidate);
      this.entrada= datos.entradactaValidate;
      this.caso = datos.casoNegocioValidate;
      this.plan = datos.planValidate;
      this.herramienta = datos.herramientasValidate;


      let x = localStorage.getItem("idproyecto");
      var idProyecto = Number(x);
      this.entradaDeActaServices.validarActa(idProyecto).subscribe(
        data=>{
          console.log('ID DE LA REUNION ES ->', data);
          
          var idActa=data;
          localStorage.setItem("idactas", idActa);
        }
      );
      
      if(datos.entradactaValidate){
        console.log('EXTRAER SI TIENE ENTRADA DEL ACTA YA FULL');
        this.entradaDeActaServices.valorIdEntraActa(idProyecto).subscribe(
          data=>{
            console.log('ID DE LA ENTRADA DEL ACTA ES  ES ->', data);
            
            var idEntradaActa=data;
            localStorage.setItem("entradaActaId", idEntradaActa);
          }
        );
      }
      

    }
    
  }
}
