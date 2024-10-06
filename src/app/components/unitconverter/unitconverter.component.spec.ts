import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitconverterComponent } from './unitconverter.component';

describe('UnitconverterComponent', () => {
  let component: UnitconverterComponent;
  let fixture: ComponentFixture<UnitconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
