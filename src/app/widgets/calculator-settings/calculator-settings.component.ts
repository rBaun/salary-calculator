import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponent } from "../../common/form/form.component";
import { FormFieldModel } from '../../common/form/models/form-field.model';
import { FormModel } from '../../common/form/models/form.model';

@Component({
  selector: 'app-calculator-settings',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './calculator-settings.component.html',
  styleUrl: './calculator-settings.component.scss'
})
export class CalculatorSettingsComponent implements OnInit {
  protected settingsForm!: FormModel;

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.buildFormData();
  }

  protected onFormValidityChange = (valid: boolean): void => {
    console.log('Form validity changed:', valid);
  }

  private buildFormData = (): void => {
    const settings = {
      fields: [
        this.buildLanguageControl()
      ]
    } as FormModel;

    this.settingsForm = settings;
  }

  private buildLanguageControl = (): FormFieldModel => {
    return {
      label: 'Language',
      name: 'language',
      type: 'select',
      options: [
        { label: 'English', value: 'en_US' },
        { label: 'Danish', value: 'da_DK' }
      ],
      validators: [Validators.required]
    } as FormFieldModel;
  }
}
