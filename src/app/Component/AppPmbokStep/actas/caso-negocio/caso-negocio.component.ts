import { Component, OnInit } from '@angular/core';
import { CasoNegocio } from 'src/app/domain/casonegocio';
import { CasonegocioService } from 'src/app/service/Actas/casonegocio.service';
import { EntradactaService } from 'src/app/service/Actas/entradacta.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-caso-negocio',
  templateUrl: './caso-negocio.component.html',
  styleUrls: ['./caso-negocio.component.css']
})
export class CasoNegocioComponent implements OnInit {
  public casoMegocio !: CasoNegocio;


  public metas: boolean = true;
  public objetivos: boolean = true;
  public incidentes: boolean = true;
  public oportunidades: boolean = true;

  public messages: string[] = [""];

  public cargaEnable:boolean=true;

  constructor(
    public router: Router,
    public casoServices: CasonegocioService,
    public entradactaService: EntradactaService,
    public spinnerService : NgxSpinnerService,
    public casoNegocioService:CasonegocioService

  ) {    
}

  ngOnInit(): void {
    this.spinnerService.show();
    this.cargaEnable = true;

    setTimeout(() => {
      console.log('cargando');
      this.spinnerService.hide();
      this.cargaEnable = false;
      this.buscarCasoDeNegocioPorEntrada();

    }, 2000);
    
    this.casoMegocio = new CasoNegocio(0, "", "", "", "", 0,false);

  }
  public guardarCasoNegocio() {

   
    console.log(this.casoMegocio.oportunidades);
    let x  = localStorage.getItem("entradaActaId");

    var idActa = Number(x);
    this.casoMegocio.idEntradaActa = idActa;
    var variable = JSON.parse(localStorage.getItem("datosActa") || '{}');

    this.casoServices.save(this.casoMegocio).subscribe(
      ok => {
        console.log('3');
        console.log(ok);
     //   window.alert("Nueva acta guardada ");

        var datosSacados = localStorage.getItem("datosActa") || {};
      //  window.alert("Nuevo Plan de Gestión se ha grabado  " +  datosSacados);
        variable.casoNegocioValidate = true;
        localStorage.setItem("datosActa", JSON.stringify(variable) );

        window.location.reload();
        

      },
      err => {
        console.log(err.error.error);

        this.messages = err.error.error;
      }
    );
  }




  public buscarCasoDeNegocioPorEntrada() {
 
   console.log('->>>>>buscarCasoDeNegocioPorEntrada');
    var idproyecto = JSON.parse(localStorage.getItem('idproyecto') || '{}');
    console.log('->>>>>',idproyecto);


    this.casoNegocioService.findherramientaDelActa(idproyecto).subscribe(
      data => {
 
        if(data[0] != null){
          this.casoMegocio = data[0];
          console.table(this.casoMegocio);  
        }
         },

      err => {
        console.log(err.error.error);
        window.alert(err.error.error);

      }
    );
   
  
}


  public updateCasoNegocio(){
    this.casoNegocioService.update(this.casoMegocio).subscribe(
      data => {
        this.casoMegocio = data;
        window.alert("actualizo el caso de negocio");
        window.location.reload();
      }, err => {
        console.log(err.error.error);
      }
    )   
  }



  public guardarmetas() {
    console.log('guardarmetas');
    this.metas = false;
  }
  public guardarobjetivos() {
    console.log('guardarobjetivos');
    this.objetivos = false;
  }
  public guardarincidentes() {
    console.log('guardarincidentes');
    this.incidentes = false;
  }
  public guardaroportunidades() {
    console.log('guardaroportunidades');
    this.oportunidades = false;
  }

}
