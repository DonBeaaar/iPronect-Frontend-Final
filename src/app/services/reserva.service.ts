import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Reserva } from '../classes/reserva';
import { map } from 'rxjs/operators';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  reservar(reserva: Reserva) {
    return this.http.post(`${URL}/reserva`, {
      publicacion: reserva.publicacion, cantidad: reserva.cantidad,
      precio: reserva.precio, despacho: reserva.preciodespacho
    });
  }

  productosReservadosCompra() {
    return this.http.get(`${URL}/reserva/comprador`).pipe(
      map((respuestaReserva: any) => {
        return respuestaReserva.reservas;
      })
    )
  }
}
