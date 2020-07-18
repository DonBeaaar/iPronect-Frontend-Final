import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicacionesService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-detalle-publicacion',
  templateUrl: './detalle-publicacion.page.html',
  styleUrls: ['./detalle-publicacion.page.scss'],
})
export class DetallePublicacionPage implements OnInit {

  constructor(private route: ActivatedRoute, private publicacionService: PublicacionesService) { }

  idPublicacion: string;
  publicacion: Publicacion;
  cantidad = 0;

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

  aumentarCantidad(){
    this.cantidad ++;
  }
  disminuirCantidad(){
    if (this.cantidad === 0) { return; }
    this.cantidad --;
  }

}
