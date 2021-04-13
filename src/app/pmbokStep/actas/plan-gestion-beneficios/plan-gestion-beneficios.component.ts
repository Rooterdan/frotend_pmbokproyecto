import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { PlanGestioBeneficio } from 'src/app/domain/plangestionbeneficio';
import { EntradactaService } from 'src/app/service/entradacta.service';
import { PlangestionbeneficioService } from 'src/app/service/plangestionbeneficio.service';

@Component({
  selector: 'app-plan-gestion-beneficios',
  templateUrl: './plan-gestion-beneficios.component.html',
  styleUrls: ['./plan-gestion-beneficios.component.css']
})
export class PlanGestionBeneficiosComponent implements OnInit {
  public planObje !: PlanGestioBeneficio;


  public acciones: boolean = true;
  public componentes: boolean = true;
  public prodcutos: boolean = true;
  public servicios: boolean = true;
  public resultado: boolean = true;
  public messages: string[] = [""];
  constructor(
    public planesService: PlangestionbeneficioService,
    public entradactaService: EntradactaService
  ) { }

  ngOnInit(): void {
    this.planObje = new PlanGestioBeneficio(0, 0, "", "", "", "","");

  }
  public guardarPlan() {
    console.log(this.planObje.acciones);
    console.log(this.planObje.componentes);
    console.log(this.planObje.prodcutos);
    console.log(this.planObje.servicios);
    console.log(this.planObje.resultado);

    let x  = localStorage.getItem("entradaActaId");
    var idActa = Number(x);
    this.planObje.idEntradaActa = idActa;
    if(this.planObje.idEntradaActa != 0){
      console.log( this.planObje);
      this.planesService.save(this.planObje).subscribe(
        ok => {
          console.log('3');
          console.log(ok);
          window.alert("Nuevo dato gurdado ");
          window.location.reload();
  
        },
        err => {
          console.log(err.error.error);
  
          this.messages = err.error.error;
        }
      );
    }else{
      window.alert('error en el identificador de las entradas');
    }


  }


  public guardaracciones() {
    console.log('GUARDARacciones');
    this.acciones = false;

  }
  public guardarcomponentes() {
    console.log('comGUARDARponentes');
    this.componentes = false;

  }
  public guardarprodcutos() {
    console.log('pGUARDARrodcutos');
    this.prodcutos = false;

  }
  public guardarservicios() {
    console.log('sGUARDARervicios');
    this.servicios = false;

  }
  public guardarresultado() {
    console.log('rGUARDAResultado');
    this.resultado = false;

  }

}
