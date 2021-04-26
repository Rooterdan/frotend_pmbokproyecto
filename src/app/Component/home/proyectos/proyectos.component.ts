import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/domain/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {


  constructor(
    public proyectoServices: ProyectosService,
    public router: Router) { }

    public proyectos!:Proyecto[];


  ngOnInit(): void {
    //this.findAllProyects();
  }

  public findAllProyects(){
    this.proyectoServices.findAll(
   
    ).subscribe(
      data => {
        this.proyectos = data;
      },
      error => {
        console.log("Error en "+ error);
      });
  }

}
