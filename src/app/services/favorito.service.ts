import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  constructor(private http: HttpClient) { }

  getDistribuidoresFavoritos() {
    return this.http.get(`${URL}/favorito/empresas`).pipe(
      map((respuestaFavorito: RespuestaEmpresasFavorito) => {
        return respuestaFavorito.empresasFavoritas;
      })
    );
  }
}
