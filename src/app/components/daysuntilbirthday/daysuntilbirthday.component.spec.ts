import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysuntilbirthdayComponent } from './daysuntilbirthday.component';

describe('DaysuntilbirthdayComponent', () => {
  let component: DaysuntilbirthdayComponent;
  let fixture: ComponentFixture<DaysuntilbirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysuntilbirthdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysuntilbirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
