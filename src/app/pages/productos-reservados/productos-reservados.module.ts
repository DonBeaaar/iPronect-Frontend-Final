import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosReservadosPageRoutingModule } from './productos-reservados-routing.module';

import { ProductosReservadosPage } from './productos-reservados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosReservadosPageRoutingModule
  ],
  declarations: [ProductosReservadosPage]
})
export class ProductosReservadosPageModule {}
