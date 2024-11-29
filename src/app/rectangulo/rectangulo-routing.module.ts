import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RectanguloPage } from './rectangulo.page';

const routes: Routes = [
  {
    path: '',
    component: RectanguloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RectanguloPageRoutingModule {}
