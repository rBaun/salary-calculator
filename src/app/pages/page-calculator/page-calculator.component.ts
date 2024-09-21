import { Component } from '@angular/core';
import { ButtonBackComponent } from '../../common/button/button-back/button-back.component';
import { InputComponent } from '../../common/input/input.component';
import { CalculateButtonComponent } from '../../widgets/calculate-button/calculate-button.component';
import { CalculatorInputsComponent } from '../../widgets/calculator-inputs/calculator-inputs.component';

@Component({
	selector: 'app-page-calculator',
	standalone: true,
	imports: [
		InputComponent,
		CalculatorInputsComponent,
		ButtonBackComponent,
		CalculateButtonComponent,
	],
	templateUrl: './page-calculator.component.html',
	styleUrl: './page-calculator.component.scss',
})
export class PageCalculatorComponent {}
