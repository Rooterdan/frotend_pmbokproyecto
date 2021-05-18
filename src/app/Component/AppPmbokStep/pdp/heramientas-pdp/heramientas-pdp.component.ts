import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Herramientas  } from 'src/app/domain/pdp/herramientas';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-heramientas-pdp',
  templateUrl: './heramientas-pdp.component.html',
  styleUrls: ['./heramientas-pdp.component.css']
})
export class HeramientasPdpComponent implements OnInit {

  public herramientasPdp !: Herramientas;

  // variables de llenar 

  public juicioexpertos:boolean=true;
	public recopilaciondatos:boolean=true;
	public habilidades:boolean=true;
	public herramientareuniones:boolean=true;


  public messages: string[] = [""];
public cargaEnable:boolean=true;

  constructor(public router: Router,
    public spinnerService : NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.cargaEnable = true;
    setTimeout(() => {
      console.log('cargando');
      this.spinnerService.hide();
      this.cargaEnable = false;
      
    }, 2000);
    this.herramientasPdp = new Herramientas(0,"","","","",0);
    
  }

  public guardarHerramientasPdp(){
    
  }
  public guardarjuicioexpertos(){
    console.log('juicioexpertos');
    this.juicioexpertos=false;
  }

  public guardarrecopilaciondatos(){
    console.log('recopilaciondatos');
    this.recopilaciondatos=false;
  }

  public guardarhabilidades(){
    console.log('habilidades');
    this.habilidades=false;
  }

  public guardarherramientareuniones(){
    console.log('herramientareuniones');
    this.herramientareuniones=false;
  }


}
