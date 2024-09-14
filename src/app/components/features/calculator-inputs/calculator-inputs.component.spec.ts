import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorInputsComponent } from './calculator-inputs.component';

describe('CalculatorInputsComponent', () => {
	let component: CalculatorInputsComponent;
	let fixture: ComponentFixture<CalculatorInputsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CalculatorInputsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(CalculatorInputsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
