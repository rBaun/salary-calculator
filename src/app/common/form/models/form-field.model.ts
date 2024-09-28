import { ValidatorFn } from '@angular/forms';
import { FormFieldError } from './form-field-error.model';
import { FormFieldOption } from './form-field-option.model';
import { FormFieldType } from './form-field.type';

export interface FormFieldModel {
	name: string;
	label: string;
	type: FormFieldType;
	initialValue?: string | number | Date;
	error?: FormFieldError;
	options?: FormFieldOption[];
	validators?: ValidatorFn[];
	group?: FormFieldModel[];
}
