import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonBackComponent } from '../../common/button-back/button-back.component';
import { CalculatorResultDetailsComponent } from '../../features/calculator-result-details/calculator-result-details.component';
import { CalculatorResultComponent } from '../../features/calculator-result/calculator-result.component';

@Component({
	selector: 'app-page-result',
	standalone: true,
	imports: [
		CalculatorResultComponent,
		CalculatorResultDetailsComponent,
		ButtonBackComponent,
		TranslocoModule,
	],
	templateUrl: './page-result.component.html',
	styleUrl: './page-result.component.scss',
})
export class PageResultComponent {}
