import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettercomparisonComponent } from './lettercomparison.component';

describe('LettercomparisonComponent', () => {
  let component: LettercomparisonComponent;
  let fixture: ComponentFixture<LettercomparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettercomparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettercomparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
