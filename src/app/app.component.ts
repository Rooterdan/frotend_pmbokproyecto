import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AuthLoginService } from './service/auth-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pmbok V7 ';
 
  public declare  nombreUsuario:any;

  constructor(public router:Router, public authlogin:AuthLoginService){}
  

  ngOnInit(): void {
    this.nombreUsuario=  localStorage.getItem('usuario');
  }
   
  public isAuth():boolean{
    if (!localStorage.getItem('usuario')) {
      return false;
    }
    this.nombreUsuario=  localStorage.getItem('usuario');
    return true;
   // return !!localStorage.getItem('usuario');
  }


  public singOut(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('pass');
  }
}
