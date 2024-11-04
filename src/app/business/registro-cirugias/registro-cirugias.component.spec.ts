import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCirugiasComponent } from './registro-cirugias.component';

describe('RegistroCirugiasComponent', () => {
  let component: RegistroCirugiasComponent;
  let fixture: ComponentFixture<RegistroCirugiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroCirugiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroCirugiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
