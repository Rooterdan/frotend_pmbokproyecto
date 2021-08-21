import { Component, OnInit } from '@angular/core';
import { ControlFases } from 'src/app/domain/ControlFases';
import { ResponsablesDTO } from 'src/app/domain/ResponsablesDTO';
import { GrupoService } from 'src/app/service/grupo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-fases',
  templateUrl: './control-fases.component.html',
  styleUrls: ['./control-fases.component.css']
})

export class ControlFasesComponent implements OnInit {

  public Reuniones !: ControlFases[];
  public responsables !: ResponsablesDTO[];
  public mensajeAlerta !: String;
  constructor(
    public servicios: GrupoService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.controlProFase();
  }
  private mostrardata(): void {
    //console.table(this.Reuniones);
    this.Reuniones.forEach(element => {
      console.table(element.proyectos);
      console.table(element.reuniones);
      console.table(element.fases);
      console.log('\n\n\n\ns');


    });
  }
  public async controlProFase() {
    const idUser = localStorage.getItem('usuario') || "none";
    if (idUser != "none" || idUser != null || idUser != undefined) {
      await this.servicios.controlProFase(idUser).subscribe(
        data => {


          this.Reuniones = data;

          this.mostrardata();
        },
        error => {
          this.mensajeAlerta = error;

        }
      );

    } else {
      this.mensajeAlerta = "No se encontro Usuario en session";

    }
  }

  public async verGrupo(idFase: number) {
    var salida = JSON.parse('{}');
    await this.servicios.responsablesEnFaseoReunion(idFase).subscribe(
      data => {
        this.responsables = data;
      },
      error => {
        this.responsables = [];
        //console.error(error.error.message);
        salida = error.error.message;
        //salida = JSON.parse( salida|| '{}');
        console.log(salida);

      }
    );

  }
  public VolverAControl(): void {
    this.router.navigate(['/Control']);

  }


}

