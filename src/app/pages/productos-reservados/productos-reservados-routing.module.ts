import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosReservadosPage } from './productos-reservados.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosReservadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosReservadosPageRoutingModule {}
