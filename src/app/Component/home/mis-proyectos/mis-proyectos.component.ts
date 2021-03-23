import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/domain/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})
export class MisProyectosComponent implements OnInit {
  public showMsg: boolean = false;
  public messages: string[] = [""];
  constructor(
    public proyectoServices: ProyectosService
  ) { }

  public proyectos !: Proyecto[];

  ngOnInit(): void {
    this.buscarProyectos();
  }

  public buscarProyectos(): void {

    this.proyectoServices.findAll().subscribe(
      data => {
        this.proyectos = data;
      },
      error => {
        console.log("Error en FINDALL");
      });
  }

  public delete(id: number): void {
    window.location.reload();
    /*
    this.proyectoServices.delete(id).subscribe(
      ok => {
        //this.showMsg = true;
        this.messages[0] = "Customer se ha elimino Correctamente";
        this.buscarProyectos();
      },
      err => {
        console.log(err.error.error);

        this.showMsg = true;
        this.messages = err.error.error;
      }
    );*/

  }


  public entrarProyecto(nombre: string, idproyecto: number): void {

    window.location.reload();
  }


}


