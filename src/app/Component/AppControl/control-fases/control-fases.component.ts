import { Component, OnInit } from '@angular/core';
import { ControlFases } from 'src/app/domain/ControlFases';
import { GrupoService } from 'src/app/service/grupo.service';

@Component({
  selector: 'app-control-fases',
  templateUrl: './control-fases.component.html',
  styleUrls: ['./control-fases.component.css']
})
export class ControlFasesComponent implements OnInit {

  public Reuniones !: ControlFases[];
  public mensajeAlerta !: String;
  constructor(
    public servicios: GrupoService
  ) { }

  ngOnInit(): void {
    this.controlProFase();
  }
  public  async controlProFase(){
    const idUser = localStorage.getItem('usuario') || "none";
    if(idUser != "none" || idUser != null || idUser != undefined){
      await this.servicios.controlProFase(idUser).subscribe(
        data =>{
          console.log(data);
          
          this.Reuniones = data;
        },
        error =>{
          this.mensajeAlerta = error;
          
        }
      );

    }else{
      this.mensajeAlerta = "No se encontro Usuario en session";

    }
    


  }

}
