import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  cat = '';
  textoBuscar = '';

  public publicaciones: Publicacion[] = [];

  constructor(private publicacionService: PublicacionesService) {}

  cargarPublicaciones(){
    this.publicacionService.getPublicacion().subscribe((publicaciones: Publicacion) => {
      this.publicaciones.push(publicaciones);
    });
  }

  ngOnInit(){
    this.cargarPublicaciones();
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }
  categoria(evento) {
    this.cat = evento.detail.value;
    console.log(evento);
  }

}
