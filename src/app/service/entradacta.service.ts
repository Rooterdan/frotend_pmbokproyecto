import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntradaActa } from '../domain/entradacta';

@Injectable({
  providedIn: 'root'
})
export class EntradactaService {

  private url: string = environment.apiUrl + 'EntradasActa/'


  constructor(public httpClient: HttpClient) { }

  /*
    createTokenHeader():HttpHeaders{
      let token=localStorage.getItem('token');
      //console.log(token)
      let headers=new HttpHeaders({'Authorization':token});
      return headers;
    }
  */

      
    public valorIdEntraActa(idProyecto: number): Observable<any> {
      //let header=this.createTokenHeader();
      console.log(this.url + 'getEntradaIdActa/' + idProyecto);
      
      return this.httpClient.get(this.url + 'getEntradaIdActa/' + idProyecto);
    }

    
    public validarValoresActa(idProyecto: number): Observable<any> {
      //let header=this.createTokenHeader();
      console.log(this.url + 'validarActa/' + idProyecto);
      
      return this.httpClient.get(this.url + 'validarActa/' + idProyecto);
    } 
    public validarActa(idProyecto: number): Observable<any> {
      //let header=this.createTokenHeader();
      console.log(this.url + 'getIdActa/' + idProyecto);
      
      return this.httpClient.get(this.url + 'getIdActa/' + idProyecto);
    }

  public findAll(): Observable<any> {
    //let header=this.createTokenHeader();
    return this.httpClient.get(this.url + 'findAll');
  }

  public findById(identrada: number): Observable<any> {
    //let header=this.createTokenHeader();
    return this.httpClient.get(this.url + 'finById/' + identrada);
  }
  public findEntradaDelActa(idProyecto:number):Observable<any>{
    //let header=this.createTokenHeader();
    return this.httpClient.get(this.url+'entradaDelActa/'+idProyecto);
  }

  public save(entradacta: EntradaActa): Observable<any> {
    //let header=this.createTokenHeader();
    console.log('-------------------');
    console.log(entradacta.acuerdos);
    console.log(entradacta.factores);
    console.log(entradacta.activosprocesos);
    console.log(entradacta.identrada);
    console.log('-------------------');
    return this.httpClient.post(this.url + 'save', entradacta);
  }

  public update(entradacta: EntradaActa): Observable<any> {
    //let header=this.createTokenHeader();
    return this.httpClient.put(this.url + 'update', entradacta);
  }

  public delete(identrada: number): Observable<any> {
    // let header=this.createTokenHeader();
    return this.httpClient.delete(this.url + 'delete/' + identrada);
  }
}
