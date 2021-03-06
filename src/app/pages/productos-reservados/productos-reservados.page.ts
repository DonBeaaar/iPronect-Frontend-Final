import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-productos-reservados',
  templateUrl: './productos-reservados.page.html',
  styleUrls: ['./productos-reservados.page.scss'],
})
export class ProductosReservadosPage implements OnInit {

  reservas: Reservas;

  constructor(private reservaService: ReservaService, private uiService: UiServiceService, private navCtrl: NavController) { }

  cargarProductosReservados() {
    this.reservaService.productosReservadosCompra().subscribe((reservas: any) => {
      this.reservas = reservas;
      if (reservas.length <= 0) {
        this.uiService.alertaInformativa('No tienes productos reservados');
        this.navCtrl.navigateBack('main/tabs/tab3');
      }
    });
  }

  ngOnInit() {
    this.cargarProductosReservados();
  }

  obtenerComprobante(reservaID: string){
    this.reservaService.generarPDFReserva(reservaID).subscribe((respuesta: any) => {
      this.uiService.toastInformativo(respuesta.message);
    });
  }

}
