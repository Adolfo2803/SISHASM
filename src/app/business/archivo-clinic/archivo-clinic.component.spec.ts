import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoClinicComponent } from './archivo-clinic.component';

describe('ArchivoClinicComponent', () => {
  let component: ArchivoClinicComponent;
  let fixture: ComponentFixture<ArchivoClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivoClinicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivoClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
