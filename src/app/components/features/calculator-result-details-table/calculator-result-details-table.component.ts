import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
	selector: 'app-calculator-result-details-table',
	standalone: true,
	imports: [TranslocoModule, CommonModule],
	templateUrl: './calculator-result-details-table.component.html',
	styleUrl: './calculator-result-details-table.component.scss',
})
export class CalculatorResultDetailsTableComponent {
	grossIncome = 50000;
	retirement = 5000;
	taxes = 15000;
	remainder = 30000;
}
