import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit {

  @Input() publicacion: Publicacion;

  public imagen = '/assets/arroz.png';
  @Output() detallePublicacion = new EventEmitter();

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  verDetallePublicacion(publicacion: string){
    const navigationExtras: NavigationExtras = { queryParams: { publicacion, vendedor: false }};
    this.navCtrl.navigateForward(['detalle-publicacion'], navigationExtras);
  }
}
