import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-admin-user',
  templateUrl: './control-admin-user.component.html',
  styleUrls: ['./control-admin-user.component.css']
})
export class ControlAdminUserComponent implements OnInit {
  // window.location.reload();
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  // {path: 'ControlAdminProject', component:AdminProjectComponent}, // Matricular Gente a un proyecto
  public ControlAdminProject():void {
    console.log('public ControlAdminProject():void {');
    this.router.navigate(['/ControlAdminProject']);
    

  }
  // {path: 'ControlFases', component: AdminProjectFasesComponent }, // Agendar as reuniones con el grupo de trabajo

  public ControlFases():void{
    console.log('public ControlFases():void{');
    this.router.navigate(['/ControlFases']);
    

  }
  // {path: 'Control-Reuniones-Por-Fase', component: ControlFasesComponent }, // Agendar as reuniones con el grupo de trabajo
  public ControlReunionesPorFase():void{
    console.log('public ControlReunionesPorFase():void{');
    this.router.navigate(['/Control-Reuniones-Por-Fase']);
  }

  // { path: 'seguimiento-proyecto', component: SeguimientoProyectoComponent, canActivate: [AuthGuard] },
  public SeguimientoProyecto():void{
    console.log('public SeguimientoProyecto():void{');
    this.router.navigate(['/seguimiento-proyecto']);
    

  }

}
