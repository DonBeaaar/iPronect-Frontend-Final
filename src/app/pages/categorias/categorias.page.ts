import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { PublicacionesService } from 'src/app/services/publicacion.service';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  public categoriaSeleccionada = 'Abarrotes';
  public categorias: Categoria[];
  public publicaciones: Publicacion[];
  private publicacionesRAW: Publicacion[];
  constructor(private categoriaService: CategoriaService, private publicacionesService: PublicacionesService,
              private navCtrl: NavController) { }

  cargarCategorias() {
    this.categoriaService.getCategorias().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
      console.log(this.categorias);
    });
  }

  cargarPublicaciones() {
    this.publicacionesService.getPublicacion().subscribe((publicaciones: Publicacion[]) => {
      this.publicaciones = publicaciones;
      this.publicacionesRAW = publicaciones;
    });
  }

  ngOnInit() {
    this.cargarCategorias();
    this.cargarPublicaciones();
  }

  categoariaSeleccionadaEvento(selectedCategoria: any) {
    this.publicaciones = this.publicacionesRAW;
    if (selectedCategoria === 'false') {
      return;
    }
    else {
      this.publicaciones = this.publicaciones.filter((publicacion: Publicacion) => {
        return publicacion.producto.categoria._id === selectedCategoria;
      });
    }
  }

  verDetallePublicacion(publicacion: string){
    const navigationExtras: NavigationExtras = { queryParams: { publicacion, vendedor: false }};
    this.navCtrl.navigateForward(['detalle-publicacion'], navigationExtras);
  }


}
