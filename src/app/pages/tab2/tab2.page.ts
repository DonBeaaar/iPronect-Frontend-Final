import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Publicacion } from 'src/app/classes/publicacion';
import { PublicacionesService } from 'src/app/services/publicacion.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  productos: Producto[] = [];
  constructor( private productoService: ProductoService,
               public fb: FormBuilder,
               private publicacionService: PublicacionesService,
               private uiService: UiServiceService) {}

  nuevaPublicacionForm = this.fb.group({
    titulo: ['', Validators.required],
    precio: [ Validators.required],
    descripcion: ['', Validators.required],
    unidadMedida: ['', Validators.required],
    producto: ['', Validators.required],
    despachoDomicilio: [false, Validators.required],
    stock: [ Validators.required]
  });

  cargarProductos(){
    this.productoService.getProductos().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
  }

  ngOnInit(){
   this.cargarProductos();
  }

  crearPublicacion(){
    const publicacion = new Publicacion(this.nuevaPublicacionForm.value.titulo,
                                      this.nuevaPublicacionForm.value.precio,
                                      this.nuevaPublicacionForm.value.descripcion,
                                      this.nuevaPublicacionForm.value.unidadMedida,
                                      this.nuevaPublicacionForm.value.producto,
                                      this.nuevaPublicacionForm.value.despachoDomicilio,
                                      this.nuevaPublicacionForm.value.stock);

    this.publicacionService.crearPublicacion(publicacion).subscribe(
      (resp: string) => {
          this.nuevaPublicacionForm.reset();
          this.uiService.alertaExitosa(resp, 'Te invitamos a revisar tu perfil para ver el estado');
    });
  }





}
