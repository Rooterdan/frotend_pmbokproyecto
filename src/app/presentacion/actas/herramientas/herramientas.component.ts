import { Component, OnInit } from '@angular/core';
import { HerramientasActa } from 'src/app/domain/herramientasactas';
import { HerramientasactaService } from 'src/app/service/herramientasacta.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {

  public datosHerramientas !: HerramientasActa;
  constructor(
    public herramientasService: HerramientasactaService
  ) { }

  ngOnInit(): void {
    this.buscarherramientasPorActa();
  }

  public buscarherramientasPorActa() {
  

    var idEntrada =  JSON.parse(localStorage.getItem('idproyecto ') || '');
    this.herramientasService.findherramientaDelActa(idEntrada).subscribe(
      data => {
        console.log(data);
        this.datosHerramientas = data;
      },

      err => {
        console.log(err.error.error);
        window.alert('Herramientas ' + err.error.error);

      }
    );
  }

}
