import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Entradas } from 'src/app/domain/pdp/entradas';
@Component({
  selector: 'app-entradaspdp',
  templateUrl: './entradaspdp.component.html',
  styleUrls: ['./entradaspdp.component.css']
})
export class EntradaspdpComponent implements OnInit {

  public entradasPDP !: Entradas;

  public messages: string[] = [""];
  public cargaEnable: boolean = true;

  public otrosprocesos: boolean = true;
  public factoresambientales: boolean = true;
  public activosprocesos: boolean = true;

  constructor(public router: Router,
    public spinnerService: NgxSpinnerService) { }

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
  public guardarEntradasPdp(){
    
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
