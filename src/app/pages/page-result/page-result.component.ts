import { Component } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ButtonComponent } from '../../common/button/button.component';
import { ButtonModel } from '../../common/button/models/button.model';
import { CalculatorResultDetailsComponent } from '../../widgets/calculator-result-details/calculator-result-details.component';
import { CalculatorResultComponent } from '../../widgets/calculator-result/calculator-result.component';

@Component({
	selector: 'app-page-result',
	standalone: true,
	imports: [
		CalculatorResultComponent,
		CalculatorResultDetailsComponent,
		ButtonComponent,
		TranslocoModule,
	],
	templateUrl: './page-result.component.html',
	styleUrl: './page-result.component.scss',
})
export class PageResultComponent {
	protected backButtonData!: ButtonModel;

	constructor(private translocoService: TranslocoService) {
		this.setupBackButton();
	}

	private setupBackButton = () => {
		this.backButtonData = {
			label: 'Back',
			backRoute: '/calculator',
			type: 'back',
			display: 'icon',
		};
	};
}
