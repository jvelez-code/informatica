import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Editorial } from '../_model/editorial';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {


  constructor(protected http: HttpClient) {}


  private editorialCambio = new Subject<Editorial[]>();
  private mensajeCambio = new Subject<string>();
  
  private url: string = `${environment.HOST}/editoriales`;

  
  
listar(){
    return this.http.get<Editorial[]>(this.url);
  }

  listarPorId(id: number){
    return this.http.get<Editorial>(`${this.url}/${id}`);
  }

  registrar(editorial: Editorial){
    return this.http.post(this.url, editorial);
  }

  modificar(editorial: Editorial){
    return this.http.put(this.url, editorial);
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  
  ////////////////// get, set ////////////////

  geteditorialCambio(){
    return this.editorialCambio.asObservable();
  }

  seteditorialCambio(editorial: Editorial[]){
    this.editorialCambio.next(editorial);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajecambio(mensaje: string){
    return this.mensajeCambio.next(mensaje);
  }

}
