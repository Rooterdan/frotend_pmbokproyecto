import { Component, OnInit } from '@angular/core';
import { HerramientasActa } from 'src/app/domain/herramientasactas';
import { EntradactaService } from 'src/app/service/entradacta.service';
import { HerramientasactaService } from 'src/app/service/herramientasacta.service';

@Component({
  selector: 'app-herramientas-acta',
  templateUrl: './herramientas-acta.component.html',
  styleUrls: ['./herramientas-acta.component.css']
})
export class HerramientasActaComponent implements OnInit {
  public herramientasObje !: HerramientasActa;

  public juicioexpertos: boolean = true;
  public recopilaciondatos: boolean = true;
  public habilidades: boolean = true;
  public herramientareuniones: boolean = true;

  public messages: string[] = [""];

  public cargaEnable:boolean=true;
  
  constructor(
    public herrmientasServices: HerramientasactaService,
    public entradactaService: EntradactaService

  ) { }

  ngOnInit(): void {
    this.cargaEnable=true;
    setTimeout(() => {
      console.log('cargando');
     
      this.cargaEnable=false;
    }, 2000);
    this.herramientasObje = new HerramientasActa(0, "", "", "", "", 0);
  }
  public guardarHerramientas() {
    console.log(this.herramientasObje.juicioexpertos);
    console.log(this.herramientasObje.recopilaciondatos);
    console.log(this.herramientasObje.habilidades);
    console.log(this.herramientasObje.herramientareuniones);
    let x = localStorage.getItem("idactas");
    var idActa = Number(x);
    this.herramientasObje.idactas = idActa;
    if (idActa > 0) {
      this.herrmientasServices.save(this.herramientasObje).subscribe(
        ok => {
          console.log(ok);
          window.alert("Nueva acta guardada ");
          window.location.reload();

        },
        err => {
          console.log(err.error.error);

          this.messages = err.error.error;
        }
      );
    } else {
      window.alert('error en el identificador del ACTA');
    }


  }





  public guardarjuicioexpertos() {
    console.log('juicioexpertos');
    this.juicioexpertos = false;
  }
  public guardarrecopilaciondatos() {
    console.log('recopilaciondatos');
    this.recopilaciondatos = false;
  }
  public guardarhabilidades() {
    console.log('habilidades');
    this.habilidades = false;
  }
  public guardarherramientareuniones() {
    console.log('herramientareuniones');
    this.herramientareuniones = false;
  }
}
