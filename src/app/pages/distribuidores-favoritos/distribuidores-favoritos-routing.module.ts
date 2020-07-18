import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistribuidoresFavoritosPage } from './distribuidores-favoritos.page';

const routes: Routes = [
  {
    path: '',
    component: DistribuidoresFavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistribuidoresFavoritosPageRoutingModule {}
