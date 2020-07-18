import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get(`${URL}/categoria`).pipe(
      map((respCategoria: RespuestaCategoria) => {
            return respCategoria.categorias;
      })
    );
  }
}
