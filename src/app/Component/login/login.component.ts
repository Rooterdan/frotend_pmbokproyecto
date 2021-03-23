import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";

  public msg: string = "";
  public showMsg: boolean = false;
  public messages: String[] = [];
  public usuarios: Usuario= new Usuario("","","","","") ;

  constructor(
    public usuarioService: UsuarioService,
    public router: Router) { }

  ngOnInit(): void {
    
  }
  


  public ingresar(): void {
    this.usuarios;
    console.log(this.usuarios); 
    this.usuarioService.findById(this.usuarios.email).subscribe(
      ok=>{
        console.log('****************');
        console.log(ok);
        this.messages[0]="Usuario encontrado";
      
        if (ok.password ===this.usuarios.password){
          this.messages[0]="Cargando pantalla ...";
          localStorage.setItem("usuario",JSON.stringify(this.usuarios));
          this.router.navigate(['/home']);

        }else{
          this.messages[0]="Error en constraseña";
        }
        
        this.showMsg=true;
        
      },
      err=>{
        console.log(err.error.error);
        
        this.showMsg=true;
        this.messages=err.error.error;
        }
    );
  }
}
