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
    /*
    Se debe tener previamente cargado el ID del acta
    para hacer un FindByAI
    */

    var idEntrada = 1;
    this.herramientasService.findById(idEntrada).subscribe(
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
