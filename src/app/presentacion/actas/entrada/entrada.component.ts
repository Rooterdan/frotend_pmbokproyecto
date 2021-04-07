import { Component, OnInit } from '@angular/core';
import { EntradactaService } from 'src/app/service/entradacta.service';
import { EntradaActa } from 'src/app/domain/entradacta'

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  public datosEntrada !: EntradaActa;
  constructor(
    public entradaService: EntradactaService
  ) { }

  ngOnInit(): void {
    this.buscarEntradaPorActa();
  }

  public buscarEntradaPorActa() {
    /*
    Se debe tener previamente cargado el ID del acta
    para hacer un FindByAI
    */

    var idActa = 15;
    this.entradaService.findById(idActa).subscribe(
      data => {
        console.log(data);
        this.datosEntrada = data;
      },

      err => {
        console.log(err.error.error);
        window.alert(err.error.error);

      }
    );
  }

}
