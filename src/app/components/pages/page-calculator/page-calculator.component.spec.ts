import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCalculatorComponent } from './page-calculator.component';

describe('PageCalculatorComponent', () => {
	let component: PageCalculatorComponent;
	let fixture: ComponentFixture<PageCalculatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PageCalculatorComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PageCalculatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
