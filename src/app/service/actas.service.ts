import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Actas } from '../domain/actas';
import { environment } from 'src/environments/environment';
 
 
@Injectable({
  providedIn: 'root'
})

export class ActasService {

  private url:string=environment.apiUrl+'api/actas/'
  

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

  public findById(idactas:number):Observable<any>{
    //let header=this.createTokenHeader();
    return this.httpClient.get(this.url+'findById/'+idactas);
  }

  public save(actas:Actas):Observable<any>{
    //let header=this.createTokenHeader();
    return this.httpClient.post(this.url+'save',actas);
  }

  public update(actas:Actas):Observable<any>{
    //let header=this.createTokenHeader();
    return this.httpClient.put(this.url+'update',actas);
  }

  public delete(idactas:number):Observable<any>{
   // let header=this.createTokenHeader();
    return this.httpClient.delete(this.url+'delete/'+idactas);
  }
}
