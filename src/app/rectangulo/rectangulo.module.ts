import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RectanguloPageRoutingModule } from './rectangulo-routing.module';

import { RectanguloPage } from './rectangulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RectanguloPageRoutingModule
  ],
  declarations: [RectanguloPage]
})
export class RectanguloPageModule {}
