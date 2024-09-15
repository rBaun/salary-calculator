import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorResultDetailsTableComponent } from './calculator-result-details-table.component';

describe('CalculatorResultDetailsTableComponent', () => {
	let component: CalculatorResultDetailsTableComponent;
	let fixture: ComponentFixture<CalculatorResultDetailsTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CalculatorResultDetailsTableComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(
			CalculatorResultDetailsTableComponent
		);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
