import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; 
import { notificaciones } from 'src/app/domain/notificaciones';
import { NotificacionesService } from 'src/app/service/notificaciones.service';

@Component({
  selector: 'app-notificaciones-control',
  templateUrl: './notificaciones-control.component.html',
  styleUrls: ['./notificaciones-control.component.css']
})
export class NotificacionesControlComponent implements OnInit {

  public salida !: String;
  public mensajes !: notificaciones[];

  constructor(public notificaciones: NotificacionesService,   public router: Router,) { }

  ngOnInit(): void {
    this.BuscarRecibidos();
  }
  public async BuscarRecibidos(){
    let email = localStorage.getItem('usuario') || '';
    if(email === ''){
      this.router.navigate(['/home']);
    }else{
      await this.notificaciones.Recibidos(email).subscribe(data=>{
        console.log(data);
        
        this.mensajes= data;

      },error =>{
        console.log(error);
        
        this.router.navigate(["/home"]) 
      });
    }
  }

  public async cambiarEstado(data:notificaciones){
    
    await this.notificaciones.cambiarEstado(data).subscribe(
      ok=>{
      console.log(ok);
      this.BuscarRecibidos();
    }, error=>{
      // console.log(error.error.message);
      this.salida=JSON.stringify(error.error.message) ;
      console.log(this.salida);
      
    });
  }
}
