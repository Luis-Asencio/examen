import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangulo',
  templateUrl: './rectangulo.page.html',
  styleUrls: ['./rectangulo.page.scss'],
})
export class RectanguloPage implements OnInit {
  base: number | null = null;  
  altura: number | null = null;  
  area: number = 0;

  constructor() {}

  calcularArea() {
    if (this.base && this.altura) {
      this.area = this.base * this.altura;
    } else {
      alert('Por favor, ingresa valores válidos para base y altura');
      this.area = 0;  // Resetea el área en caso de error
    }
  }

  borrarDatos() {
    this.base = null;
    this.altura = null;
    this.area = 0;
  }

  ngOnInit() {
  }

}
