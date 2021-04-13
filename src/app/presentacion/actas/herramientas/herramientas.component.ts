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
  
    console.log('->>>>> buscarherramientasPorActa');
    var idproyecto = JSON.parse(localStorage.getItem('idproyecto') || '');
    console.log('->>>>>',idproyecto);
    this.herramientasService.findherramientaDelActa(idproyecto).subscribe(
      data => {
        console.log(data);
        this.datosHerramientas = data[0];
      },

      err => {
        console.log(err.error.error);
        window.alert('Herramientas ' + err.error.error);

      }
    );
  }

}
