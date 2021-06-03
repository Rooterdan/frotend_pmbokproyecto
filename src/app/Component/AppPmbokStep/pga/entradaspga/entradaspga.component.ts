import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EntradaPga } from 'src/app/domain/pga/EntradaPga';

@Component({
  selector: 'app-entradaspga',
  templateUrl: './entradaspga.component.html',
  styleUrls: ['./entradaspga.component.css']
})
export class EntradaspgaComponent implements OnInit {

  public entradasPga !: EntradaPga;

  public messages: string[] = [""];
  public cargaEnable: boolean = true;

  public estandares: boolean = true;
  public objetivocalidad: boolean = true;
  public ciclo: boolean = true;
  public enfoque: boolean = true;
  public activosprocesos: boolean = true;

  constructor(
    public router: Router,
    public spinnerService: NgxSpinnerService

  ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    setTimeout(() => {
      console.log('cargando');
      this.spinnerService.hide();
      this.cargaEnable = false;

    }, 2000);
    this.entradasPga = new EntradaPga(0, "", "", "", "", "");
  }


  public estandaresM(): void {
     this.estandares = false;
  }

  public objetivocalidadM(): void {
     this.objetivocalidad = false;
  }

  public cicloM(): void {
     this.ciclo = false;
  }

  public enfoqueM(): void {
     this.enfoque = false;
  }

  public activosprocesosM(): void {
     this.activosprocesos = false;
  }


}
