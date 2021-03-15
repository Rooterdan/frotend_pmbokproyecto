import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FaseProyecto } from '../domain/faseproyecto';

@Injectable({
  providedIn: 'root'
})
export class FaseproyectoService {

  private url:string=environment.apiUrl+'api/faseproyecto/'
  

  constructor(public httpClient:HttpClient) { }

/*
  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
    //console.log(token)
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }
*/


  public findAll():Observable<any>{
    //let header=this.createTokenHeader();
    return this.httpClient.get(this.url+'findAll');
  }

  public findById(idfase:number):Observable<any>{
    //let header=this.createTokenHeader();
    return this.httpClient.get(this.url+'findById/'+idfase);
  }

  public save(faseproyecto:FaseProyecto):Observable<any>{
    //let header=this.createTokenHeader();
    return this.httpClient.post(this.url+'save',faseproyecto);
  }

  public update(faseproyecto:FaseProyecto):Observable<any>{
    //let header=this.createTokenHeader();
    return this.httpClient.put(this.url+'update',faseproyecto);
  }

  public delete(idfase:number):Observable<any>{
   // let header=this.createTokenHeader();
    return this.httpClient.delete(this.url+'delete/'+idfase);
  }
}
