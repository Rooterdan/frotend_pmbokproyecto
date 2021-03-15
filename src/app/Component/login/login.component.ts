import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string = "";
  public password:string = "";

  public msg:string="";
  public showMsg:boolean=false;
  public messages: String[] = [];
  public usuario!: Usuario;

  constructor(public usuarioService:UsuarioService,
    public router:Router) { }

  ngOnInit(): void {
  }

  public login():void{
    if((this.email == "admin1@admin.com" && this.password == "password") || (this.email=="admin2@admin.com" && this.password=="admin2")){
        this.router.navigate(['/home'])
    }
  }
}
