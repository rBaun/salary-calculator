import { CommonModule } from '@angular/common';
import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormFieldModel } from './models/form-field.model';
import { FormModel } from './models/form.model';

@Component({
	selector: 'app-form',
	standalone: true,
	imports: [ReactiveFormsModule, FormFieldComponent, CommonModule],
	templateUrl: './form.component.html',
	styleUrl: './form.component.scss',
})
export class FormComponent implements OnChanges {
	@Input({ required: true }) data!: FormModel;
	@Output() formValidityChange = new EventEmitter<boolean>();
	protected formGroup!: FormGroup;
	protected nestedFormGroupMap: Map<string, FormGroup> = new Map();
	private previousValidity: boolean | null = null;

	constructor(private fb: FormBuilder) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['data'] && changes['data'].currentValue) {
			this.data = changes['data'].currentValue;
			this.buildForm();
		}
	}

	private buildForm = (): void => {
		const group: { [key: string]: any } = {};
		this.data.fields.forEach(field => {
			if (field.group) {
				const nestedGroup = this.fb.group(
					this.createGroup(field.group)
				);
				group[field.name] = nestedGroup;
				this.nestedFormGroupMap.set(field.name, nestedGroup);
			} else {
				group[field.name] = ['', field.validators || []];
			}
		});
		this.formGroup = this.fb.group(group);

		// Emit intial form validity
		this.emitFormValidity();

		// Listen for validity changes and emit the change
		this.listenForValidityChanges();
	};

	private createGroup = (
		fields: FormFieldModel[]
	): { [key: string]: any } => {
		const group: { [key: string]: any } = {};
		fields.forEach(field => {
			if (field.group) {
				group[field.name] = this.fb.group(
					this.createGroup(field.group)
				);
			} else {
				group[field.name] = ['', field.validators || []];
			}
		});
		return group;
	};

	private emitFormValidity = (): void => {
		const currentValidity = this.formGroup.valid;

		// Only emit if the validity has changed
		if (this.previousValidity === currentValidity) return;

		this.formValidityChange.emit(currentValidity);
		this.previousValidity = currentValidity;
	};
	private listenForValidityChanges = () => {
		this.formGroup.statusChanges.subscribe(() => this.emitFormValidity());
	};
}
