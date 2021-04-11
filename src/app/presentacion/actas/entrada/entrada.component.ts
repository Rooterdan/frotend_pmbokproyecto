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
    //revisar bien la variable
    var idActa = JSON.parse(localStorage.getItem('idproyecto ') || '');

    this.entradaService.findEntradaDelActa(idActa).subscribe(
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
