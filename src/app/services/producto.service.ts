import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${URL}/producto`).pipe(
      map((respuesta: RespuestaProducto) => {
        return respuesta.productos;
      })
    );
  }
}
