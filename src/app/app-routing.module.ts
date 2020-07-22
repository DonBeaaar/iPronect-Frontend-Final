import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PostGuard } from './guards/post.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: []
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'detalle-publicacion',
    loadChildren: () => import('./pages/detalle-publicacion/detalle-publicacion.module').then(m => m.DetallePublicacionPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/distribuidores-favoritos/distribuidores-favoritos.module')
      .then(m => m.DistribuidoresFavoritosPageModule)
  },
  {
    path: 'perfil-empresa',
    loadChildren: () => import('./pages/perfil-empresa/perfil-empresa.module').then( m => m.PerfilEmpresaPageModule)
  },
  {
    path: 'detalle-reserva',
    loadChildren: () => import('./pages/detalle-reserva/detalle-reserva.module').then( m => m.DetalleReservaPageModule)
  },
  {
    path: 'productos-reservados',
    loadChildren: () => import('./pages/productos-reservados/productos-reservados.module').then( m => m.ProductosReservadosPageModule)
  },
  {
    path: 'productos-vendidos',
    loadChildren: () => import('./pages/productos-vendidos/productos-vendidos.module').then( m => m.ProductosVendidosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
