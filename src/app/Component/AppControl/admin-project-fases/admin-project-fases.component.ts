import { Component, OnInit } from '@angular/core';
import { tipofases } from 'src/app/domain/tipofases';
import { Rol } from 'src/app/domain/roles';
import { GrupoService } from 'src/app/service/grupo.service';
import { GrupoDto } from 'src/app/domain/GrupoDto';
import { Usuario } from 'src/app/domain/usuario';
import { CrearfaseConResponsablesDTO } from 'src/app/domain/CrearfaseConResponsablesDTO';

@Component({
  selector: 'app-admin-project-fases',
  templateUrl: './admin-project-fases.component.html',
  styleUrls: ['./admin-project-fases.component.css']
})
export class AdminProjectFasesComponent implements OnInit {

  Mensaje !: String;
  Fases!: tipofases[];
  roles!: Rol[];
  grupoTrabajo !: GrupoDto[];
  usuarioResponsable: Array<any>;
  crearfaseConResponsablesDTO: CrearfaseConResponsablesDTO;


  constructor(
    public fasesServices: GrupoService
  ) {
    this.usuarioResponsable = [];
    this.crearfaseConResponsablesDTO = new CrearfaseConResponsablesDTO(0, 0, "", [], "", "", "", "");


  }

  ngOnInit(): void {
    this.validarDatos();
    this.fasesServices.fasesDelProyecto().subscribe(
      data => {
        console.log(data);
        this.Fases = data;
      },
      error => {
        console.log(error);

      }
    );
    this.cargarUsuariosEnGrupo();

  }
  private validarDatos(): void {
    if (localStorage.getItem("idproyecto") == undefined || localStorage.getItem("idproyecto") == null || localStorage.getItem("idproyecto") === "") {
      window.location.href = 'http://localhost:4200/home';
    }


  }



  public matricular(): void {
    console.log("---------");
    this.Mensaje = "";
    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    this.crearfaseConResponsablesDTO.idproyecto = idProyecto;
    let tmp: Array<any> = [];

    this.usuarioResponsable.forEach(element => {
      tmp.push({ 'id': element.idgrupo });
      this.crearfaseConResponsablesDTO.idresponsable = tmp;
    });

    this.crearfaseConResponsablesDTO.tiempoinicio = this.crearfaseConResponsablesDTO.tiempoinicio.replace('-', '/');
    this.crearfaseConResponsablesDTO.tiempoinicio = this.crearfaseConResponsablesDTO.tiempoinicio.replace('-', '/');
    this.crearfaseConResponsablesDTO.tiempofin = this.crearfaseConResponsablesDTO.tiempofin.replace('-', '/');
    this.crearfaseConResponsablesDTO.tiempofin = this.crearfaseConResponsablesDTO.tiempofin.replace('-', '/');

    console.log(this.crearfaseConResponsablesDTO);
    console.log("---------");
    this.fasesServices.faseResponsables(this.crearfaseConResponsablesDTO).subscribe(
      data => {

        console.log(JSON.parse(data));
        
        setTimeout(() => {
          this.Mensaje = "SE GRABO LA NUEVA REUNION  ";


        }, 3000);
        location.reload();

      },
      error => {
        setTimeout(() => {
          this.Mensaje = error;


        }, 3000);
        console.log(error);
      }
    );


  }


  public cargarFases(): void {

    this.fasesServices.fasesDelProyecto().subscribe(
      data => {
        console.log(data);

        this.Fases = data;

      },
      error => {
        console.log(error);

      }
    );



  }

  public async cargarUsuariosEnGrupo() {
    let x = localStorage.getItem("idproyecto");
    var idProyecto = Number(x);
    await this.fasesServices.grupoDeTrabajo(idProyecto).subscribe(
      data => {
        this.grupoTrabajo = data;
      }, error => {
        console.log(error.message);

      }
    );
  }

  public agregarUsuario(email: String, rol: String, idgrupo: number) {
    var agregar = true;
    this.usuarioResponsable.forEach(element => {
      if (element.nombre == email && element.rol == rol) {
        console.log('repetido');
        agregar = false;
      }
    });
    if (agregar) {
      this.usuarioResponsable.push({ 'nombre': email, 'rol': rol, 'idgrupo': idgrupo });
    }

  }

  public eliminarUsuario(email: String, rol: String) {
    var indice = this.usuarioResponsable.indexOf({ 'nombre': email, 'rol': rol }); // obtenemos el indice
    this.usuarioResponsable.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
  }

}