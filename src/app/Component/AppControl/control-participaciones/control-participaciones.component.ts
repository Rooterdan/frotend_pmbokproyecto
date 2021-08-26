import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlFases } from 'src/app/domain/ControlFases';
import { GrupoService } from 'src/app/service/grupo.service';

@Component({
  selector: 'app-control-participaciones',
  templateUrl: './control-participaciones.component.html',
  styleUrls: ['./control-participaciones.component.css']
})
export class ControlParticipacionesComponent implements OnInit {

  public Reuniones !: ControlFases[];
  today = Date.now();
  fixedTimezone = this.today;
  public mensajeAlerta !: String;
  constructor(public servicios: GrupoService,
    public router: Router) { }

  ngOnInit(): void {
    this.controlProFase();
  }

  public async controlProFase() {
    var proyecto = JSON.parse(localStorage.getItem('proyectoParticipacion') || '{}');
    let x = proyecto.idproyecto;
    var idProyecto = Number(x);
    var idUser = localStorage.getItem('usuario') || "none";

    if (idUser != "none" || idUser != null || idUser != undefined) {
      await this.servicios.consultarParticipaciones(idUser, idProyecto).subscribe(
        data => {
          this.Reuniones = data;
        },
        error => {
          this.mensajeAlerta = error;

        }
      );

    } else {
      this.mensajeAlerta = "No se encontro Usuario en session";

    }
  }

  public ingresofase(fase: String, data:any): void {
    console.log(data);
    console.log(' \n');
    
    if (fase === "Acta-Entrada") {
      console.log('Acta-Entrad');
      

    }
    if (fase === "Acta-Herramientas") {
      console.log('Acta-Herram');
      

    }
    if (fase === "Acta-CasoNegocio") {
      console.log('Acta-CasoNe');
      

    }
    if (fase === "Acta-PlanGestionBeneficio") {
      console.log('Acta-PlanGe');
      

    }
    if (fase === "PDP-Entrada") {
      console.log('PDP-Entrada');
      

    }
    if (fase === "PDP-Herramientas") {
      console.log('PDP-Herrami');
      

    }
    if (fase === "PGA-Entrada") {
      console.log('PGA-Entrada');
      

    }
    if (fase === "PGA-Herramientas") {
      console.log('PGA-Herrami');
      

    }

  }
}
