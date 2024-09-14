import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonResetComponent } from '../../common/button-reset/button-reset.component';
import { IconHelpComponent } from '../../common/icon-help/icon-help.component';
import { IconInfoComponent } from '../../common/icon-info/icon-info.component';
import { InputNumberComponent } from '../../common/input-number/input-number.component';
import { InputPercentageComponent } from '../../common/input-percentage/input-percentage.component';

@Component({
	selector: 'app-calculator-inputs',
	standalone: true,
	imports: [
		InputNumberComponent,
		InputPercentageComponent,
		IconHelpComponent,
		IconInfoComponent,
		ButtonResetComponent,
		TranslocoModule,
	],
	templateUrl: './calculator-inputs.component.html',
	styleUrl: './calculator-inputs.component.scss',
})
export class CalculatorInputsComponent {
	protected grossIncomeControl = new FormControl();
	protected taxDeductionControl = new FormControl();
	protected pensionPercentageControl = new FormControl();
	protected taxRateControl = new FormControl();
}
