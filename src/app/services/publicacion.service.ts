import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Publicacion } from '../classes/publicacion';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  token: string ;

  constructor(private http: HttpClient) {}

  getPublicacion(){
      return this.http.get(`${URL}/publicacion`).pipe(
        map((respuestaPublicaciones: any) => {
          return respuestaPublicaciones.publicaciones;
        })
      );
  }

  crearPublicacion( publicacion: Publicacion){
    // console.log(publicacion);
    return this.http.post(`${URL}/publicacion`, publicacion).pipe(
      map((respuesta: any) => {
        return respuesta.message;
      })
    );
  }

  detallePublicacion( id: string){
    return this.http.get(`${URL}/publicacion/${id}`).pipe(
      map((respuestaDetalle: any) => {
        return respuestaDetalle.publicacion;
      })
    );
  }

}
