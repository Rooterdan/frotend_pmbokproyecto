import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    public proyectoServices: ProyectosService,
    public router: Router
  ) { }

  public proyectos !: Proyecto[];

  ngOnInit(): void {
    this.buscarProyectos();
  }

  public buscarProyectos(): void {

    this.proyectoServices.findByEmail(
      localStorage.getItem("usuario") || ''
    ).subscribe(
      data => {
        this.proyectos = data;
      },
      error => {
        console.log("Error en "+ error);
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
    localStorage.removeItem('idactas');
    localStorage.removeItem('idreunion');
    localStorage.removeItem('entradaActaId');
    

    localStorage.setItem("nombreProyecto", nombre);
    localStorage.setItem("idproyecto", idproyecto.toString());
    this.router.navigate(['/seguimiento-proyecto']);
    //window.location.reload();
  }


}


