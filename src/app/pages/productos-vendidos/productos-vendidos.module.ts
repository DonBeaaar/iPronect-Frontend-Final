import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosVendidosPageRoutingModule } from './productos-vendidos-routing.module';

import { ProductosVendidosPage } from './productos-vendidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosVendidosPageRoutingModule
  ],
  declarations: [ProductosVendidosPage]
})
export class ProductosVendidosPageModule {}
