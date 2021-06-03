import { Component, OnInit } from '@angular/core';
import { PgaServiceService } from 'src/app/service/PgaService/pga-service.service';

@Component({
  selector: 'app-pga',
  templateUrl: './pga.component.html',
  styleUrls: ['./pga.component.css']
})
export class PgaComponent implements OnInit {


  public entrada: boolean = false;
  public herramienta: boolean = false;

  public entradaVista: boolean = false;
  public herramientaVista: boolean = false;

  constructor(
    public pgaServiceService: PgaServiceService
  ) { }

  ngOnInit(): void {
  }
  public entradaM(): void {
    this.entradaVista = true;
  }
  public herramientaM(): void {
    this.herramientaVista = true;
  }
  public falseTotal(): void {
    this.herramientaVista = true;
    this.entradaVista = true;
  }

  /*
  public async RevisarAvances(){    
    var datos = JSON.parse(localStorage.getItem('datosPGA') || '{}');
    //window.alert("Caso negocio Validate :" +datos.casoNegocioValidate + " Entrada Validate :" + datos.entradactaValidate);
    if( datos.acta){
     // console.log('************** public RevisarAvances():void{'  );
     // console.table(datos);
  
      this.entrada= datos.entradactaPgaValidate;
      this.herramienta = datos.herramientasPgaValidate;
        

      let x = localStorage.getItem("idproyecto");
      var idProyecto = Number(x);
      await this.pgaServiceService.validarPdp(idProyecto).subscribe(
        data=>{
         // console.log('ID DE LA REUNION ES ->', data);
          
          var idActa=data;
          localStorage.setItem("idactas", idActa);
        }
      );
      
      if(datos.entradactaValidate){
        //console.log('EXTRAER SI TIENE ENTRADA DEL ACTA YA FULL');
      
        this.entradaDeActaServices.valorIdEntraActa(idProyecto).subscribe(
          data=>{
        //    console.log('ID DE LA ENTRADA DEL ACTA ES  ES ->', data);
             window.alert("entro en datos.entradactaValidate ((DATA)) " + data );

            var idEntradaActa=data;
            localStorage.setItem("entradaActaId", idEntradaActa);
          }
        );
      }
      

    }
    
  }*/

}
