import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromenumberComponent } from './palindromenumber.component';

describe('PalindromenumberComponent', () => {
  let component: PalindromenumberComponent;
  let fixture: ComponentFixture<PalindromenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalindromenumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalindromenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
