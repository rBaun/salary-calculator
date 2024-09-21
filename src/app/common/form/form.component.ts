import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from "./form-field/form-field.component";
import { FormFieldModel } from './models/form-field.model';
import { FormModel } from './models/form.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormFieldComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnChanges {
  @Input({ required: true }) data!: FormModel;
  
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
        group[field.name] = this.fb.group(this.createGroup(field.group));
      } else {
        group[field.name] = ['', field.validators || []];
      }
    });
    this.data.formGroup = this.fb.group(group);
  }

  private createGroup = (fields: FormFieldModel[]): { [key: string]: any } => {
    const group: { [key: string]: any } = {};
    fields.forEach(field => {
      group[field.name] = ['', field.validators || []];
    });
    
    return group;
  }
}
