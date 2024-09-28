import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModel } from '../models/form-field.model';

@Component({
	selector: 'app-form-field',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './form-field.component.html',
	styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
	@Input({ required: true }) data!: FormFieldModel;
	@Input({ required: true }) formGroup!: FormGroup;

	getErrorKeys(fieldName: string): string[] {
		const control = this.formGroup.get(fieldName);
		return control ? Object.keys(control.errors || {}) : [];
	  }
	
	  getErrorMessage(fieldName: string, errorKey: string): string {
		const control = this.formGroup.get(fieldName)!;
		if (this.data.error?.override) {
		  return this.data.error.message;
		}
	
		switch (errorKey) {
		  case 'required':
			return `${this.data.label} is required.`;
		  case 'minlength':
			const minLength = control.errors?.['minlength']?.requiredLength;
			return `${this.data.label} must be at least ${minLength} characters long.`;
		  case 'maxlength':
			const maxLength = control.errors?.['maxlength']?.requiredLength;
			return `${this.data.label} cannot be more than ${maxLength} characters long.`;
		
		  default:
			return `${this.data.label} is invalid.`;
		}
	  }
}
