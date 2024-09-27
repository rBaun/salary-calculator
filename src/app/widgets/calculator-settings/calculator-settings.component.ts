import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslocoService } from '@jsverse/transloco';
import { FormComponent } from '../../common/form/form.component';
import { FormFieldModel } from '../../common/form/models/form-field.model';
import { FormModel } from '../../common/form/models/form.model';

@Component({
	selector: 'app-calculator-settings',
	standalone: true,
	imports: [FormComponent],
	templateUrl: './calculator-settings.component.html',
	styleUrl: './calculator-settings.component.scss',
})
export class CalculatorSettingsComponent implements OnInit {
	protected settingsForm!: FormModel;

	constructor(
		private formBuilder: FormBuilder,
		private translocoService: TranslocoService
	) {}

	ngOnInit(): void {
		this.buildFormData();
	}

	protected onFormValidityChange = (valid: boolean): void => {
		console.log('Form validity changed:', valid);
	};

	private buildFormData = (): void => {
		const settings = {
			fields: [
				this.buildLanguageField(),
				this.buildCurrencyField(),
				this.buildTooltipFieldGroup(),
				this.buildIncludeRetirementSavingsField(),
				this.buildIncludeDetailedResultsField(),
			],
		} as FormModel;

		this.settingsForm = settings;
	};

	private buildLanguageField = (): FormFieldModel => {
		return {
			label: this.translocoService.translate('settings.language.label'),
			name: 'language',
			type: 'select',
			options: [
				{
					label: this.translocoService.translate(
						'settings.language.options.english'
					),
					value: 'en_US',
				},
				{
					label: this.translocoService.translate(
						'settings.language.options.danish'
					),
					value: 'da_DK',
				},
			],
			validators: [Validators.required],
		} as FormFieldModel;
	};

	private buildCurrencyField = (): FormFieldModel => {
		return {
			label: 'Currency',
			name: this.translocoService.translate('settings.currency.label'),
			type: 'select',
			options: [
				{
					label: this.translocoService.translate(
						'settings.currency.options.dkk'
					),
					value: 'DKK',
				},
				{
					label: this.translocoService.translate(
						'settings.currency.options.eur'
					),
					value: 'EUR',
				},
				{
					label: this.translocoService.translate(
						'settings.currency.options.usd'
					),
					value: 'USD',
				},
			],
			validators: [Validators.required],
		} as FormFieldModel;
	};

	private buildTooltipFieldGroup = (): FormFieldModel => {
		return {
			label: this.translocoService.translate('settings.tooltips.label'),
			group: [
				this.buildDisplayHelpTooltipField(),
				this.buildDisplayInfoTooltipField(),
			],
		} as FormFieldModel;
	};

	private buildDisplayHelpTooltipField = (): FormFieldModel => {
		return {
			label: this.translocoService.translate(
				'settings.helpTooltip.label'
			),
			name: 'displayHelpTooltip',
			type: 'toggle',
		} as FormFieldModel;
	};

	private buildDisplayInfoTooltipField = (): FormFieldModel => {
		return {
			label: this.translocoService.translate(
				'settings.infoTooltip.label'
			),
			name: 'displayInfoTooltip',
			type: 'toggle',
		} as FormFieldModel;
	};

	private buildIncludeRetirementSavingsField = (): FormFieldModel => {
		return {
			label: this.translocoService.translate(
				'settings.includeRetirementSavings.label'
			),
			name: 'includeRetirementSavings',
			type: 'toggle',
		} as FormFieldModel;
	};

	private buildIncludeDetailedResultsField = (): FormFieldModel => {
		return {
			label: this.translocoService.translate(
				'settings.includeDetailedResults.label'
			),
			name: 'includeDetailedResults',
			type: 'toggle',
		} as FormFieldModel;
	};
}
