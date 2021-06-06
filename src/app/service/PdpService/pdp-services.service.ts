import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Entradas } from 'src/app/domain/pdp/entradas';
import { Herramientas } from 'src/app/domain/pdp/herramientas';
import { Pdp } from 'src/app/domain/pdp/pdp';
import { ValidarPdp } from 'src/app/domain/pdp/validarPdp';

@Injectable({
  providedIn: 'root'
})
export class PdpServicesService {
  private url: string = environment.apiUrl + 'pdp/';
  constructor(
    public httpClient: HttpClient
  ) { }

  public validarPdp(id: number): Observable<any> {
    return this.httpClient.get(this.url + 'validarPdp/' + id);
  }

  /*  Servicios de Guardado */
  public savePdp(pdp: Pdp): Observable<any> {
    return this.httpClient.post(this.url + 'savePdp', pdp);
  }
  public savePdpPorIdProyecto(id: number): Observable<any> {
    console.log(this.url + 'savePdpPorIdProyecto/' + id);

    return this.httpClient.get(this.url + 'savePdpPorIdProyecto/' + id);
  }
  
  public BuscarPdpPorIdProyecto(id: number): Observable<any> {
    return this.httpClient.get(this.url + 'BuscarPdpPorIdProyecto/' + id);
  }

  public saveHerramientasPdp(herramientaspdp: Herramientas): Observable<any> {
    return this.httpClient.post(this.url + 'saveHerramientasPdp', herramientaspdp);
  }

  public saveEntradasPdp(entradaPdp: Entradas): Observable<any> {
    return this.httpClient.post(this.url + 'saveEntradasPdp', entradaPdp);
  }
  /*  Servicios de Guardado */

  /*  Servicios de consulta */
  public findByIdPdp(id: number): Observable<any> {
    return this.httpClient.get(this.url + 'BuscarPdp/' + id);
  }

  public findByIdHerramientasPdp(id: number): Observable<any> {
    return this.httpClient.get(this.url + 'BuscarHerramientasPdp/' + id);
  }
  public findByIdEntradasPdp(id: number): Observable<any> {
    return this.httpClient.get(this.url + 'BuscarEntradasPdp/' + id);
  }/* FIN Servicios de consulta */

}
