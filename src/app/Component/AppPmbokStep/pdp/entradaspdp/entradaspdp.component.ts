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

    }, 2000);
    this.entradasPDP = new Entradas(0, 0, "", "", "");

  }
  async guardarEntradasPdp() {

    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    console.log('public guardarEntradasPdp(){');
    await this.pdpServicesService.savePdpPorIdProyecto(idProyecto).subscribe(
      data => {
        // console.log('ID DE LA REUNION ES ->', data);
        var idPdp = data.idpdp;
        localStorage.setItem("idPdp", idPdp);
        console.log('SE GRABA EL ID DEL idPdp; SE BUSCO CON BASE AL ID DEL PROYECTO');
        //console.log(idPdp);
        this.entradasPDP.idpdp = idPdp;
        console.log('*** \n ', this.entradasPDP);
        this.guardarEntrada();


      });


  }
  async guardarEntrada() {
    await this.pdpServicesService.saveEntradasPdp(this.entradasPDP).subscribe(
      data => {
        // console.log('ID DE LA REUNION ES ->', data);
        console.log(data);
        window.alert('Entradas del Plan Para la Direccion del proyecto Han sido guardados');
        this.router.navigate(['/seguimiento-proyecto']);
      });
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
