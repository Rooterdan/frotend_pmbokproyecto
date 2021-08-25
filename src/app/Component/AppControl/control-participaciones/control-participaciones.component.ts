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
  constructor(  public servicios: GrupoService,
    public router: Router) { }

  ngOnInit(): void {
    this.controlProFase();
  }

  public async controlProFase() {
    const idUser = localStorage.getItem('usuario') || "none";
    if (idUser != "none" || idUser != null || idUser != undefined) {
      await this.servicios.controlProFase(idUser).subscribe(
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
}
