import { Component, OnInit } from '@angular/core';
import { FavoritoService } from 'src/app/services/favorito.service';

@Component({
  selector: 'app-distribuidores-favoritos',
  templateUrl: './distribuidores-favoritos.page.html',
  styleUrls: ['./distribuidores-favoritos.page.scss'],
})
export class DistribuidoresFavoritosPage implements OnInit {

  public empresasFavoritos: Favorito[];

  constructor(private favoritoService: FavoritoService) { }

  cargarDistribuidoresFavoritos() {
    this.favoritoService.getDistribuidoresFavoritos().subscribe((empresasFavoritos: Favorito[]) => {
      this.empresasFavoritos = empresasFavoritos;
    });
  }

  ngOnInit() {
    this.cargarDistribuidoresFavoritos();
  }

}
