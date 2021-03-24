import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/domain/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyecto-save',
  templateUrl: './proyecto-save.component.html',
  styleUrls: ['./proyecto-save.component.css']
})
export class ProyectoSaveComponent implements OnInit {

  public msg: string = "";
  public showMsg: boolean = false;
  public notificacion: String[] = [];

  public proyecto = new Proyecto();

  constructor(
    public proyectos: ProyectosService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  public guardarNuevoProyecto() {
    this.proyecto.admin = localStorage.getItem("usuario") || '{}';
    console.log(this.proyecto);
    this.proyectos.save(this.proyecto).subscribe(
      ok => {
        this.notificacion[0] = ok;
        this.proyecto = new Proyecto();
        this.router.navigate(['/home']);

      }, err => {
        console.log(err.error.error);

        //this.showMsg=true;
        this.notificacion[0] = "Error Al guardar el Ususario";
      }

    );
  }
}
