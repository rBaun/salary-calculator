import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateButtonComponent } from './calculate-button.component';

describe('CalculateButtonComponent', () => {
  let component: CalculateButtonComponent;
  let fixture: ComponentFixture<CalculateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
