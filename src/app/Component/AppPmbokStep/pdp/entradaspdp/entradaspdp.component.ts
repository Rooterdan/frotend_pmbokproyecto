import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { Entradas } from 'src/app/domain/pdp/entradas';
import { Pdp } from 'src/app/domain/pdp/pdp';
import { PdpServicesService } from 'src/app/service/PdpService/pdp-services.service';
@Component({
  selector: 'app-entradaspdp',
  templateUrl: './entradaspdp.component.html',
  styleUrls: ['./entradaspdp.component.css']
})
export class EntradaspdpComponent implements OnInit {

  public entradasPDP !: Entradas;
  public pdp !: Pdp;

  public messages: string[] = [""];
  public cargaEnable: boolean = true;

  public otrosprocesos: boolean = true;
  public factoresambientales: boolean = true;
  public activosprocesos: boolean = true;

  constructor(public router: Router,
    public spinnerService: NgxSpinnerService,
    public pdpServicesService: PdpServicesService ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.cargaEnable = true;
    setTimeout(() => {
      console.log('cargando');
      this.spinnerService.hide();
      this.cargaEnable = false;
      this.buscarEntradaPdp();
     // this.buscarPdp();
    }, 1300);
    this.entradasPDP = new Entradas(0 , "", "", "", 0,false,"");

  }

  public buscarPdp(){

    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    console.log('public buscarPpd by proyecto(){');
    if(idProyecto != null || idProyecto <0 ){
      
      this.pdpServicesService.BuscarPdpPorIdProyecto(idProyecto).subscribe(
        data => {
         this.pdp = data;
         localStorage.setItem("idPdp", data.idpdp);

         // window.alert(data.idpdp);
        }
      );  
      //  window.alert("Despues del servicio ") ; 
       // this.buscarEntradaPorActa();
    }
    
  }

  public updateEntradaPdp(){
    this.pdpServicesService.updateEntradasPdp(this.entradasPDP).subscribe(
        data => {
            this.entradasPDP = data;
            window.alert("actualizo entrada pdp "); 
            window.location.reload();

        }
    );
  }


  async guardarEntradasPdp() {

    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    console.log('public guardarEntradasPdp(){');
    var updateDataPDP = JSON.parse(localStorage.getItem("datosPDP") || '{}');

    await this.pdpServicesService.savePdpPorIdProyecto(idProyecto).subscribe(
      data => {
        // console.log('ID DE LA REUNION ES ->', data);
        var idPdp = data.idpdp;
        updateDataPDP.entradactaPdpValidate = true;
        localStorage.setItem("datosActa", JSON.stringify(updateDataPDP) );
        localStorage.setItem("idPdp", idPdp);
        //.log('SE GRABA EL ID DEL idPdp; SE BUSCO CON BASE AL ID DEL PROYECTO');
        //console.log(idPdp);
        this.entradasPDP.idpdp = idPdp;
        //console.log('*** \n ', this.entradasPDP);
        this.guardarEntrada();


      });


  }


  async guardarEntrada() {

    await this.pdpServicesService.saveEntradasPdp(this.entradasPDP).subscribe(
      data => {
        // console.log('ID DE LA REUNION ES ->', data);
        console.log(data);
        window.alert('Entradas del Plan Para la Direccion del proyecto Han sido guardados');
   
        window.location.reload();

      });
  }

  public buscarEntradaPorActa() {
    //revisar bien la variable
    console.log('->>>>> buscarEntradaPorActa');
    var idpdp = localStorage.getItem('idPdp');
    var idN = Number(idpdp);
    //window.alert(idN);
    console.log('->>>>>ID DEL PROYECTO ES: ', idN);

    this.pdpServicesService.findByIdEntradasPdp(idN).subscribe(
      data => {
        
        console.log('Se encontro la entrada del acta con base al ID PROYECTO = ',data);
        if (data[0] != null) {
          console.log('Se encontro la entrada del acta con base al ID PROYECTO = ',data[0]);
     
          this.entradasPDP = data;
        }
      },
      err => {
        console.log(err.error.error);
        window.alert(err.error.error);

      }
    );
  }

  buscarEntradaPdp(){
    var id = localStorage.getItem("idPdp");
    var idproyecto =  JSON.parse(localStorage.getItem('idproyecto') || '{}');
    if(id != null ){
      this.pdpServicesService.BuscarPdpPorIdProyecto(idproyecto).subscribe (
        data => {
          if(data != null){
          this.entradasPDP = data ;
          }
        });
   
    }
  }

  public guardarotrosprocesos() {
    console.log(" guardarotrosprocesos(){");
    this.otrosprocesos = false;
  }
  public guardarfactoresambientales() {
    console.log(" guardarfactoresambientales      (){");
    this.factoresambientales = false;
  }
  public guardaractivosprocesos() {
    console.log(" guardaractivosprocesos (){");
    this.activosprocesos = false;
  }

}
