import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistribuidoresFavoritosPage } from './distribuidores-favoritos.page';

describe('DistribuidoresFavoritosPage', () => {
  let component: DistribuidoresFavoritosPage;
  let fixture: ComponentFixture<DistribuidoresFavoritosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribuidoresFavoritosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistribuidoresFavoritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
