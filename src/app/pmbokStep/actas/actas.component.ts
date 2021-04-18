import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { EntradactaService } from 'src/app/service/entradacta.service';

@Component({
  selector: 'app-actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.css']
})
export class ActasComponent implements OnInit {


  public entrada: boolean = false;
  public caso: boolean = false;
  public plan: boolean = false;
  public herramienta: boolean = false;


  constructor(
    public entradaDeActaServices:EntradactaService,
    ) { }

  ngOnInit(): void {
    this.disableOpciones();
  }

  public disableOpciones() {
    if (
      localStorage.getItem('idactas') == null &&
      localStorage.getItem('idreunion') == null &&
      localStorage.getItem('entradaActaId') == null 
    ) {
      return true

    }else{
      return false;
    }


  }
  public entradaM(): void {
    this.falseTotal();
    this.entrada = true;
  }
  public casoM(): void {
    this.falseTotal();
    this.caso = true;
  }
  public planM(): void {
    this.falseTotal();
    this.plan = true;
  }
  public herramientaM(): void {
    this.falseTotal();
    this.herramienta = true;
  }

  public falseTotal(): void {
    this.entrada = false;
    this.caso = false;
    this.plan = false;
    this.herramienta = false;

  }

}
