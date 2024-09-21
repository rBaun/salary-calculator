import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { AccordionComponent } from '../../common/accordion/accordion.component';
import { CalculatorResultDetailsTableComponent } from '../calculator-result-details-table/calculator-result-details-table.component';

@Component({
	selector: 'app-calculator-result-details',
	standalone: true,
	imports: [
		AccordionComponent,
		TranslocoModule,
		CalculatorResultDetailsTableComponent,
	],
	templateUrl: './calculator-result-details.component.html',
	styleUrl: './calculator-result-details.component.scss',
})
export class CalculatorResultDetailsComponent {}
