import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Autor } from '../_model/autor';


@Injectable({
  providedIn: 'root'
})
export class AutorService {


  constructor(protected http: HttpClient) {}


  private AutorCambio = new Subject<Autor[]>();
  private mensajeCambio = new Subject<string>();
  
  private url: string = `${environment.HOST}/autores`;

  
  
listar(){
    return this.http.get<Autor[]>(this.url);
  }

  listarPorId(id: number){
    return this.http.get<Autor>(`${this.url}/${id}`);
  }

  registrar(autor: Autor){
    return this.http.post(this.url, autor);
  }

  modificar(autor: Autor){
    return this.http.put(this.url, autor);
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  
  ////////////////// get, set ////////////////

  getAutorCambio(){
    return this.AutorCambio.asObservable();
  }

  setAutorCambio(autor: Autor[]){
    this.AutorCambio.next(autor);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajecambio(mensaje: string){
    return this.mensajeCambio.next(mensaje);
  }
}
