import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from '../_model/genero';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {



  constructor(protected http: HttpClient) {}


  private generoCambio = new Subject<Genero[]>();
  private mensajeCambio = new Subject<string>();
  
  private url: string = `${environment.HOST}/generos`;

  
  
listar(){
    return this.http.get<Genero[]>(this.url);
  }

  listarPorId(id: number){
    return this.http.get<Genero>(`${this.url}/${id}`);
  }

  registrar(genero: Genero){
    return this.http.post(this.url, genero);
  }

  modificar(genero: Genero){
    return this.http.put(this.url, genero);
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  
  ////////////////// get, set ////////////////

  getGeneroCambio(){
    return this.generoCambio.asObservable();
  }

  setGeneroCambio(Genero: Genero[]){
    this.generoCambio.next(Genero);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajecambio(mensaje: string){
    return this.mensajeCambio.next(mensaje);
  }


}
