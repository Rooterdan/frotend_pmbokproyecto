import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthLoginService } from 'src/app/service/auth-login.service';
import { NotificacionesService } from 'src/app/service/notificaciones.service';

//import { AuthGuard } from './guard/auth.guard';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pmbok V7 ';

  public cantidadMensajes !: number;
  public declare nombreUsuario: any;

  constructor(public router: Router, public authlogin: AuthLoginService, public notificaciones: NotificacionesService) { }


  ngOnInit(): void {
    this.nombreUsuario = localStorage.getItem('usuario');
    this.contarMensajes();
  }

  public isAuth(): boolean {
    if (!localStorage.getItem('usuario')) {
      return false;
    }
    this.nombreUsuario = localStorage.getItem('usuario');
    return true;
    // return !!localStorage.getItem('usuario');
  }


  public singOut() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('pass');
  }

  public async contarMensajes() {
    let email = localStorage.getItem('usuario') || '';
    if (email === '') {
      this.router.navigate(['/login']);
    } else {
      await this.notificaciones.contarMensajes(email).subscribe(data => {
        console.log(data);

        this.cantidadMensajes = data;

      }, error => {
        console.log(error);

        this.router.navigate(["/home"])
      })
    }
  }


}
