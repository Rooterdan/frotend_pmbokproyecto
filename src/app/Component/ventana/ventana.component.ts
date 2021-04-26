import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventana',
  templateUrl: './ventana.component.html',
  styleUrls: ['./ventana.component.css']
})
export class VentanaComponent implements OnInit {


  protected hoursArray!: Array<number>;


  constructor() {
    
  }

  ngOnInit(): void {
  
  }

 
}
