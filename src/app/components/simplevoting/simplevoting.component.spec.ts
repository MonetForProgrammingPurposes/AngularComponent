import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplevotingComponent } from './simplevoting.component';

describe('SimplevotingComponent', () => {
  let component: SimplevotingComponent;
  let fixture: ComponentFixture<SimplevotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplevotingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplevotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
