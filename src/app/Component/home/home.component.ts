import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
export interface ExampleTab {
  label: string;
  content: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;
  
  constructor() {
    console.log('NUEVO despliegue!')
    
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      //console.log('aca ->',typeof(groComponent));
      
      setTimeout(() => {
        observer.next([
          { label: 'Proyectos', content: 'Proyectos de otros usuarios' },
          { label: 'Mi Proyectos', content: 'Participacion en proyecto' },
          { label: 'crear proyecto', content: 'crear proyecto' },
        ]);
      }, 1000);
    });
  }

  ngOnInit(): void {
    localStorage.removeItem('datosActa');
  }




}
