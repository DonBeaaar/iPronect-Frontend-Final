import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { PublicacionesService } from 'src/app/services/publicacion.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-publicacion',
  templateUrl: './detalle-publicacion.page.html',
  styleUrls: ['./detalle-publicacion.page.scss'],
})
export class DetallePublicacionPage implements OnInit {

  constructor(private route: ActivatedRoute, private publicacionService: PublicacionesService, private navCtrl: NavController) { }

  idPublicacion: string;
  publicacion: Publicacion;
  cantidad = 0;
  despacho: boolean;

  ngOnInit() {
    this.route.queryParams.subscribe(publicacion => { this.idPublicacion = publicacion.publicacion; });
    this.cargarDetallePublicacion();
  }

  cargarDetallePublicacion() {
    this.publicacionService.detallePublicacion(this.idPublicacion).subscribe((publicacion: Publicacion) => {
      this.publicacion = publicacion;
      console.log(this.publicacion);
    });
  }

  aumentarCantidad() {
    this.cantidad++;
    if (this.cantidad > this.publicacion.stock) {
      this.cantidad = this.publicacion.stock;
      console.log('No puedes comprar mas de la cantidad especificada');
    }
  }
  disminuirCantidad() {
    if (this.cantidad === 0) { return; }
    this.cantidad--;
  }

  reservar() {
    if (this.cantidad === 0) { return; }
    // tslint:disable-next-line: radix
    let precioTotal = ( Number.parseInt(this.publicacion.precio) * this.cantidad);

    if (this.despacho) {
      precioTotal = precioTotal + this.publicacion.precioDespacho;
    }

    const navigationExtras: NavigationExtras = {
      queryParams: {
        titulo: this.publicacion.titulo,
        empresa: this.publicacion.empresa.nombre,
        cantidad: this.cantidad,
        despacho: this.despacho,
        publicacion: this.publicacion._id,
        precio: precioTotal
      }
    };
    this.navCtrl.navigateForward(['detalle-reserva'], navigationExtras);
  }
  verPerfilEmpresa(empresaID){
    const navigationExtras: NavigationExtras = {queryParams: {empresaID}};
    this.navCtrl.navigateForward('/perfil-empresa', navigationExtras);
  }
}
