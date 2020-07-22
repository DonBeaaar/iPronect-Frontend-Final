import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-productos-vendidos',
  templateUrl: './productos-vendidos.page.html',
  styleUrls: ['./productos-vendidos.page.scss'],
})
export class ProductosVendidosPage implements OnInit {

  reservas: Reservas;

  constructor(private reservaService: ReservaService, private uiService: UiServiceService, private navCtrl: NavController) { }

  cargarProductosVendidos() {
    this.reservaService.productosReservadosVenta().subscribe((reservas: any) => {
      this.reservas = reservas;
      if (reservas.length <= 0) {
        this.uiService.alertaInformativa('No tienes productos vendidos');
        this.navCtrl.navigateBack('main/tabs/tab3');
      }
    });
  }

  ngOnInit() {
    this.cargarProductosVendidos();
  }

  obtenerComprobante(reservaID: string){
    this.reservaService.generarPDFReserva(reservaID).subscribe((respuesta: any) => {
      this.uiService.toastInformativo(respuesta.message);
    });
  }

}
