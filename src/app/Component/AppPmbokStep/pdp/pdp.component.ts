import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {

  // Variables para iconos 
  public pdp: boolean = false;
  public entrada: boolean = false;
  public herramienta: boolean = false;
  // Variables para permitir las vistas
  public entradaVista: boolean = false;
  public herramientaVista: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.checkStatusEntrada();
    this.RevisarAvances();
  }

  public RevisarAvances() {
    console.log('public async RevisarAvances() {');
    var datos = JSON.parse(localStorage.getItem('datosPDP') || '{}');
    if (datos) {
      if (
        datos.entradactaPdpValidate &&
        datos.herramientasPdpValidate &&
        datos.pdp
      ) {
        console.log('TODO FULL NO HAY MAS DATOS PERMITIDOS');
        this.entradaVista = datos.entradactaPdpValidate;
        this.herramientaVista = datos.herramientasPdpValidate;
      }





    }

  }


  public checkStatusEntrada() {
    console.log('\n \n public checkStatusEntrada() {');

    var variable = JSON.parse(localStorage.getItem("datosPDP") || '{}');

    if (variable) {
      console.log('condicional');
      this.pdp = variable.pdp;
      this.entrada = variable.entradactaPdpValidate;
      this.herramienta = variable.herramientasPdpValidate;
    }
  }

}
