import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Libro } from '../_model/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {


constructor(protected http: HttpClient) {}


private LibroCambio = new Subject<Libro[]>();
private mensajeCambio = new Subject<string>();

private url: string = `${environment.HOST}/libros`;



listar(){
  return this.http.get<Libro[]>(this.url);
}

listarPorId(id: number){
  return this.http.get<Libro>(`${this.url}/${id}`);
}

registrar(Libro: Libro){
  return this.http.post(this.url, Libro);
}

modificar(Libro: Libro){
  return this.http.put(this.url, Libro);
}

eliminar(id: number){
  return this.http.delete(`${this.url}/${id}`);
}


////////////////// get, set ////////////////

getLibroCambio(){
  return this.LibroCambio.asObservable();
}

setLibroCambio(Libro: Libro[]){
  this.LibroCambio.next(Libro);
}

getMensajeCambio(){
  return this.mensajeCambio.asObservable();
}

setMensajecambio(mensaje: string){
  return this.mensajeCambio.next(mensaje);
}


}
