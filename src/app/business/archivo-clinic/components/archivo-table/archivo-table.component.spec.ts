import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoTableComponent } from './archivo-table.component';

describe('ArchivoTableComponent', () => {
  let component: ArchivoTableComponent;
  let fixture: ComponentFixture<ArchivoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivoTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
