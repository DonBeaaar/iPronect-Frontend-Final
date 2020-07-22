import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductosVendidosPage } from './productos-vendidos.page';

describe('ProductosVendidosPage', () => {
  let component: ProductosVendidosPage;
  let fixture: ComponentFixture<ProductosVendidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosVendidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosVendidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
