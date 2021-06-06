import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Herramientas } from 'src/app/domain/pdp/herramientas';
import { NgxSpinnerService } from 'ngx-spinner';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { PdpServicesService } from 'src/app/service/PdpService/pdp-services.service';

@Component({
  selector: 'app-heramientas-pdp',
  templateUrl: './heramientas-pdp.component.html',
  styleUrls: ['./heramientas-pdp.component.css']
})
export class HeramientasPdpComponent implements OnInit {

  public herramientasPdp !: Herramientas;

  // variables de llenar 


  public juicioexpertos: boolean = true;
  public recopilaciondatos: boolean = true;
  public habilidades: boolean = true;
  public herramientareuniones: boolean = true;


  public messages: string[] = [""];
  public cargaEnable: boolean = true;

  constructor(public router: Router,
    public spinnerService: NgxSpinnerService,
    public servicesPdp: PdpServicesService) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.cargaEnable = true;
    setTimeout(() => {
      console.log('cargando');
      this.spinnerService.hide();
      this.cargaEnable = false;

    }, 2000);
    this.herramientasPdp = new Herramientas(0, "", "", "", "", 0);

  }
  public async revisarIdpdp() {
    let x = localStorage.getItem("idPdp");
    var idPdp = Number(x);

    if (idPdp) {

    } else {
      // No se encontro el ID PDP 
      // sI NO EXISTE EL IP PDP NO SE GRABARÁ LA HERRAMIENT DEL PDP
      let x = localStorage.getItem("idproyecto");
      var idproyecto = Number(x);
      await this.servicesPdp.BuscarPdpPorIdProyecto(idproyecto).subscribe(
        data => {
          console.log(data.idpdp);
          localStorage.setItem('idPdp', data.idpdp);

        }
      );
    }

  }

  public  async guardarHerramientasPdp() {
    console.log('public guardarHerramientasPdp() {');
    this.revisarIdpdp();
    let x = localStorage.getItem("idPdp");
    var idpdp = Number(x);
    this.herramientasPdp.idpdp = idpdp;
    console.log(this.herramientasPdp);
    await this.servicesPdp.saveHerramientasPdp(this.herramientasPdp).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('idPdp', data.idpdp);
        this.router.navigate(['/seguimiento-proyecto']);
      }
    );

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
