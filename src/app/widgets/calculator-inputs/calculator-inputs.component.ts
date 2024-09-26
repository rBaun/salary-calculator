import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ButtonComponent } from '../../common/button/button.component';
import { ButtonModel } from '../../common/button/models/button.model';
import { IconComponent } from '../../common/icon/icon.component';
import { InputComponent } from '../../common/input/input.component';

@Component({
	selector: 'app-calculator-inputs',
	standalone: true,
	imports: [
		InputComponent,
		IconComponent,
		ButtonComponent,
		TranslocoModule,
	],
	templateUrl: './calculator-inputs.component.html',
	styleUrl: './calculator-inputs.component.scss',
})
export class CalculatorInputsComponent implements OnInit {
	protected grossIncomeControl = new FormControl();
	protected taxDeductionControl = new FormControl();
	protected pensionPercentageControl = new FormControl();
	protected taxRateControl = new FormControl();

	protected resetButtonData!: ButtonModel;

	constructor(private translocoService: TranslocoService) {}

	ngOnInit(): void {
		this.setupResetButton();
	}

	public canSave = (): boolean => {
		return true;
	};

	protected onResetClick = () => {
		this.resetInputs();
	};

	private resetInputs = () => {
		this.grossIncomeControl.reset();
		this.taxDeductionControl.reset();
		this.pensionPercentageControl.reset();
		this.taxRateControl.reset();
	};

	private setupResetButton = () => {
		this.resetButtonData = {
			label: this.translocoService.translate('buttons.reset'),
			type: 'reset',
			display: 'both',
		};
	}
}
