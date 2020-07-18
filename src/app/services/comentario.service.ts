import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }


  getComentariosPublicacion(publicacion: string){
    return this.http.get(`${URL}/comentario/publicacion/${publicacion}`).pipe(
      map((respuestaComentario: any) => {
        return respuestaComentario.comentarios;
      })
    );
  }

  createComentario(publicacion: string, comentario: string ){
    return this.http.post(`${URL}/comentario`, {comentario, publicacion}).pipe(
      map((respuestaComentarioExitoso: any) => {
        return respuestaComentarioExitoso.message;
      })
    );
  }
}
