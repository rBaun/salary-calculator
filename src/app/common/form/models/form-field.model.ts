import { ValidatorFn } from "@angular/forms";
import { FormFieldOption } from "./form-field-option.model";
import { FormFieldType } from "./form-field.type";

export interface FormFieldModel {
    name: string;
    label: string;
    type: FormFieldType;
    options?: FormFieldOption[];
    validators?: ValidatorFn[];
    group?: FormFieldModel[];
}