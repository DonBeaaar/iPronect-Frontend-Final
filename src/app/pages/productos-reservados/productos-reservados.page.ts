import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-productos-reservados',
  templateUrl: './productos-reservados.page.html',
  styleUrls: ['./productos-reservados.page.scss'],
})
export class ProductosReservadosPage implements OnInit {

  reservas: Reservas;

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    this.reservaService.productosReservadosCompra().subscribe((reservas: Reservas)=>{this.reservas = reservas; console.log(this.reservas)})
  }

}
