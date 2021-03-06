import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePublicacionPageRoutingModule } from './detalle-publicacion-routing.module';

import { DetallePublicacionPage } from './detalle-publicacion.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetalleReservaPage } from '../detalle-reserva/detalle-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePublicacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallePublicacionPage, DetalleReservaPage]
})
export class DetallePublicacionPageModule {}
