import { Component, OnInit } from '@angular/core';
import { PlanGestioBeneficio } from 'src/app/domain/plangestionbeneficio';
import { PlangestionbeneficioService } from 'src/app/service/plangestionbeneficio.service';

@Component({
  selector: 'app-plan-gestion',
  templateUrl: './plan-gestion.component.html',
  styleUrls: ['./plan-gestion.component.css']
})
export class PlanGestionComponent implements OnInit {

  public datosPlan !:  PlanGestioBeneficio;
  constructor(
    public planService:PlangestionbeneficioService
  ) { }

  ngOnInit(): void {
    this.buscarherramientasPorActa();

  }
  public buscarherramientasPorActa() {
    /*
    Se debe tener previamente cargado el ID del acta
    para hacer un FindByAI
    */
    console.log('->>>>> buscarherramientasPorActa');
    var idproyecto = JSON.parse(localStorage.getItem('idproyecto') || '');
    console.log('->>>>>',idproyecto);
    this.planService.findplanGestionDelActa(idproyecto).subscribe(
      data => {
        console.log('->>>>> buscarherramientasPorActa');
        console.log(data[0]);
        this.datosPlan = data[0];
      },

      err => {
        console.log(err.error.error);
        window.alert('Plan gestion Beneficios ' + err.error.error);

      }
    );
  }
}
