import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    this.Mensaje=false;
  }

  constructor(
    public usuarioService: UsuarioService,
    public router: Router
  ) { }
  public Mensaje:boolean=false;
  public notificacion: string[] = [""];
  public usuarios: Usuario= new Usuario("","","","","") ;

  public registrarUsuario(): void {

    this.notificacion = [""];
    console.log("Option de guardado ");
    
    this.usuarios.enable="Y";
    this.usuarios.token="generico123456789";

    console.log(this.usuarios);
    this.usuarioService.save(this.usuarios).subscribe(
      ok => {
        //this.showMsg=true;
        this.Mensaje=true;
        
        this.notificacion[0] = "Nuevo Usuario Registrado";
        setTimeout(
          ()=> {
            console.log('Recargando');
          }
        );
        window.location.reload();
        this.router.navigate(['/']);

      },
      err => {
        console.log(err.error.error);

        //this.showMsg=true;
        this.notificacion[0] = "Error Al guardar el Ususario";
      }
    );


  }
}
