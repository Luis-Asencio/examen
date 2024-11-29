import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rectangulo',
    loadChildren: () => import('./rectangulo/rectangulo.module').then( m => m.RectanguloPageModule)
  },
  {
    path: '',
    redirectTo: 'rectangulo',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
