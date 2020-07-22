import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/classes/reserva';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { NavController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.page.html',
  styleUrls: ['./detalle-reserva.page.scss'],
})
export class DetalleReservaPage implements OnInit {

  titulo: string;
  nombreEmpresa: string;
  cantidad: number;
  precioFinal: number;
  despachoDomicilio: boolean;
  publicacionID: string;
  reservaConfirmada: Reserva;

  constructor(private route: ActivatedRoute, private reservaService: ReservaService, private uiService: UiServiceService, 
              private navCtrl: NavController) { }

  cargarDetalleReserva() {
    this.route.queryParams.subscribe((reserva) => {
      this.titulo = reserva.titulo;
      this.nombreEmpresa = reserva.empresa;
      this.cantidad = reserva.cantidad;
      this.precioFinal = reserva.precio;
      this.despachoDomicilio = reserva.despacho;
      this.publicacionID = reserva.publicacion;
    });
  }

  ngOnInit() {
    this.cargarDetalleReserva();
  }

  confirmarReserva() {
    // tslint:disable-next-line: prefer-const
    let reservaConfirmada = new Reserva(this.publicacionID, this.cantidad, this.despachoDomicilio, this.precioFinal);

    this.reservaService.reservar(reservaConfirmada).subscribe(async (respueta: any) => {
        await this.uiService.popover('Su producto fue reservado con exito', 'Para visualizar la reserva puede acceder a su perfil en los productos reservados');
        this.navCtrl.navigateForward(['/main/tabs/tab3']);
     });

  }
}
