import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaCirugiasComponent } from './busqueda-cirugias.component';

describe('BusquedaCirugiasComponent', () => {
  let component: BusquedaCirugiasComponent;
  let fixture: ComponentFixture<BusquedaCirugiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaCirugiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaCirugiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
