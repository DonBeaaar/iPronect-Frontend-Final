import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductosReservadosPage } from './productos-reservados.page';

describe('ProductosReservadosPage', () => {
  let component: ProductosReservadosPage;
  let fixture: ComponentFixture<ProductosReservadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosReservadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosReservadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
