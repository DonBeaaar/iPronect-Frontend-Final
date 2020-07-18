import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { FormsModule } from '@angular/forms';
// import { DetallePublicacionPage } from '../pages/detalle-publicacion/detalle-publicacion.page';



@NgModule({
  declarations: [
    PublicacionesComponent,
    PublicacionComponent,
    ComentarioComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [PublicacionesComponent, ComentarioComponent]
})
export class ComponentsModule { }
