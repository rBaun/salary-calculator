import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
	selector: 'app-calculator-result',
	standalone: true,
	imports: [TranslocoModule, CommonModule],
	templateUrl: './calculator-result.component.html',
	styleUrl: './calculator-result.component.scss',
})
export class CalculatorResultComponent {}
