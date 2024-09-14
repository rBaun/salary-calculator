import { Component } from '@angular/core';
import { ButtonBackComponent } from '../../common/button-back/button-back.component';
import { InputNumberComponent } from '../../common/input-number/input-number.component';
import { InputPercentageComponent } from '../../common/input-percentage/input-percentage.component';
import { CalculateButtonComponent } from '../../features/calculate-button/calculate-button.component';
import { CalculatorInputsComponent } from '../../features/calculator-inputs/calculator-inputs.component';

@Component({
	selector: 'app-page-calculator',
	standalone: true,
	imports: [
		InputNumberComponent,
		InputPercentageComponent,
		CalculatorInputsComponent,
		ButtonBackComponent,
		CalculateButtonComponent,
	],
	templateUrl: './page-calculator.component.html',
	styleUrl: './page-calculator.component.scss',
})
export class PageCalculatorComponent {}
