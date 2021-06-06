import { Component, OnInit } from '@angular/core';
import { PgaServiceService } from 'src/app/service/PgaService/pga-service.service';

@Component({
  selector: 'app-pga',
  templateUrl: './pga.component.html',
  styleUrls: ['./pga.component.css']
})
export class PgaComponent implements OnInit {

  public pga: boolean = false;
  public entrada: boolean = false;
  public herramienta: boolean = false;

  public entradaVista: boolean = false;
  public herramientaVista: boolean = false;

  constructor(
    public pgaServiceService: PgaServiceService
  ) { }

  ngOnInit(): void {
    this.checkStatusHerramienta();

  }


  public async checkStatusHerramienta() {
    console.log('PGA COMPONENTES');
    console.log(',\n public async RevisarAvances() {');


    var datos = JSON.parse(localStorage.getItem('datosPGA') || '{}');
    if (datos.pga &&
      datos.entradactaPgaValidate

    ) {
      console.log('11111');
      this.pga = true;
      this.entrada = true;
      this.buscarIdPga();
      if (datos.entradactaPgaValidate) {
        this.herramientaVista = true;
        console.log('333');

      }

    } else {
      console.log('2222');

      this.entradaVista = true;
      this.herramientaVista = false;
    }
  }

  public async buscarIdPga() {
    console.log('public async buscarIdPga(){');
    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    await this.pgaServiceService.findIdPgaForIdProyecto(idProyecto).subscribe(
      data => {
        console.log(data);
        console.log();
        localStorage.setItem('idPga', data.idga);
        
      }, err => {
        window.alert('Plan gestion Beneficios ' + err.error.error);
      }
    );


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



}
