import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorResultDetailsComponent } from './calculator-result-details.component';

describe('CalculatorResultDetailsComponent', () => {
  let component: CalculatorResultDetailsComponent;
  let fixture: ComponentFixture<CalculatorResultDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorResultDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
