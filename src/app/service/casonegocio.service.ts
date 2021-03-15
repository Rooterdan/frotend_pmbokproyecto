import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CasoNegocio } from '../domain/casonegocio';

@Injectable({
  providedIn: 'root'
})
export class CasonegocioService {

  private url:string=environment.apiUrl+'api/casonegocio/'
  

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

  public findById(id_caso_negocio:number):Observable<any>{
    //let header=this.createTokenHeader();
    return this.httpClient.get(this.url+'findById/'+id_caso_negocio);
  }

  public save(casonegocio:CasoNegocio):Observable<any>{
    //let header=this.createTokenHeader();
    return this.httpClient.post(this.url+'save',casonegocio);
  }

  public update(casonegocio:CasoNegocio):Observable<any>{
    //let header=this.createTokenHeader();
    return this.httpClient.put(this.url+'update',casonegocio);
  }

  public delete(id_caso_negocio:number):Observable<any>{
   // let header=this.createTokenHeader();
    return this.httpClient.delete(this.url+'delete/'+id_caso_negocio);
  }
}
