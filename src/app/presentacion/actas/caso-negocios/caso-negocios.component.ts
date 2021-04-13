import { Component, OnInit } from '@angular/core';
import { CasoNegocio } from 'src/app/domain/casonegocio';
import { CasonegocioService } from 'src/app/service/casonegocio.service';
@Component({
  selector: 'app-caso-negocios',
  templateUrl: './caso-negocios.component.html',
  styleUrls: ['./caso-negocios.component.css']
})
export class CasoNegociosComponent implements OnInit {

  public datosCasoNegocio !: CasoNegocio;

  constructor(
    public casoNegocioService: CasonegocioService
  ) { }

  ngOnInit(): void {
    this.buscarCasoDeNegocioPorEntrada();
  }
  public buscarCasoDeNegocioPorEntrada() {
    /*
    Se debe tener previamente cargado el ID del acta
    para hacer un FindByAI
    */
    console.log('->>>>>buscarCasoDeNegocioPorEntrada');
    var idproyecto = JSON.parse(localStorage.getItem('idproyecto') || '');
    console.log('->>>>>',idproyecto);
    this.casoNegocioService.findherramientaDelActa(idproyecto).subscribe(
      data => {
        console.log('data'); 
        console.log(data);
        console.log(data[0]);
        console.log('data');
        this.datosCasoNegocio = data[0];
      },

      err => {
        console.log(err.error.error);
        window.alert(err.error.error);

      }
    );
  }
}
