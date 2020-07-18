import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistribuidoresFavoritosPageRoutingModule } from './distribuidores-favoritos-routing.module';

import { DistribuidoresFavoritosPage } from './distribuidores-favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistribuidoresFavoritosPageRoutingModule
  ],
  declarations: [DistribuidoresFavoritosPage]
})
export class DistribuidoresFavoritosPageModule {}
