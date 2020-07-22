import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosVendidosPage } from './productos-vendidos.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosVendidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosVendidosPageRoutingModule {}
