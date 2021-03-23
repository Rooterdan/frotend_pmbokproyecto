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


  constructor(public router:Router, public authlogin:AuthLoginService){}
  public isAuth():boolean{
    if (localStorage.getItem('usuario')) {
      return true;
    } else {
      return false;
    }
   // return !!localStorage.getItem('usuario');
  }


  public singOut(){
    localStorage.removeItem('usuario');
  }
}
