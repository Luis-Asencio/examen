import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RectanguloPage } from './rectangulo.page';

describe('RectanguloPage', () => {
  let component: RectanguloPage;
  let fixture: ComponentFixture<RectanguloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RectanguloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
