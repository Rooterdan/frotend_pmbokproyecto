import { Component, OnInit } from '@angular/core';
import { CasoNegocio } from 'src/app/domain/casonegocio';
import { CasonegocioService } from 'src/app/service/casonegocio.service';
import { EntradactaService } from 'src/app/service/entradacta.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-caso-negocio',
  templateUrl: './caso-negocio.component.html',
  styleUrls: ['./caso-negocio.component.css']
})
export class CasoNegocioComponent implements OnInit {
  public casoMegocio !: CasoNegocio;


  public metas: boolean = true;
  public objetivos: boolean = true;
  public incidentes: boolean = true;
  public oportunidades: boolean = true;

  public messages: string[] = [""];

  public cargaEnable:boolean=true;

  constructor(
    public router: Router,
    public casoServices: CasonegocioService,
    public entradactaService: EntradactaService,
    public spinnerService : NgxSpinnerService

  ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.cargaEnable = true;
    setTimeout(() => {
      console.log('cargando');
      this.spinnerService.hide();
      this.cargaEnable = false;
      
    }, 2000);
    
    this.casoMegocio = new CasoNegocio(0, "", "", "", "", 0);

  }
  public guardarCasoNegocio() {
    console.log(this.casoMegocio.metas);
    console.log(this.casoMegocio.objetivos);
    console.log(this.casoMegocio.incidentes);
    console.log(this.casoMegocio.oportunidades);
    let x  = localStorage.getItem("entradaActaId");
    var idActa = Number(x);
    this.casoMegocio.idEntradaActa = idActa;
    this.casoServices.save(this.casoMegocio).subscribe(
      ok => {
        console.log('3');
        console.log(ok);
        window.alert("Nueva acta guardada ");
        window.location.reload();
        this.router.navigate(['/seguimiento-proyecto']);

      },
      err => {
        console.log(err.error.error);

        this.messages = err.error.error;
      }
    );
  }


  public guardarmetas() {
    console.log('guardarmetas');
    this.metas = false;
  }
  public guardarobjetivos() {
    console.log('guardarobjetivos');
    this.objetivos = false;
  }
  public guardarincidentes() {
    console.log('guardarincidentes');
    this.incidentes = false;
  }
  public guardaroportunidades() {
    console.log('guardaroportunidades');
    this.oportunidades = false;
  }

}
