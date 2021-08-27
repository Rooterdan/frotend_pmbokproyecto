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

  public ingresofase(fase: String, data: any): void {
    console.log(data.nombrefase);
    console.log(' \n');

    if (fase === "Acta-Entrada") {
      console.log('Acta-Entrad');
      this.router.navigate(['/actas/entradas']);

    }
    if (fase === "Acta-Herramientas") {
      console.log('Acta-Herram');
      this.router.navigate(['/actas/herramientas']);

    }
    if (fase === "Acta-CasoNegocio") {
      console.log('Acta-CasoNe');

      this.router.navigate(['/actas/entradas/caso-negocio']);
    }
    if (fase === "Acta-PlanGestionBeneficio") {
      console.log('Acta-PlanGe');
      this.router.navigate(['/actas/entradas/plan-gestion-beneficio']);

    }
    if (fase === "PDP-Entrada") {
      console.log('PDP-Entrada');

      this.router.navigate(['/pdp/entradasPdp']);
    }
    if (fase === "PDP-Herramientas") {
      console.log('PDP-Herrami');

      this.router.navigate(['/pdp/herramientasPdp']);
    }
    if (fase === "PGA-Entrada") {
      console.log('PGA-Entrada');
      this.router.navigate(['/Pga/entradasPdp']);

    }
    if (fase === "PGA-Herramientas") {
      console.log('PGA-Herrami');
      this.router.navigate(['/Pga/herramientasPga']);

    }

  }
}
