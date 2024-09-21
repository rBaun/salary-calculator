import { FormGroup } from "@angular/forms";
import { FormFieldModel } from "./form-field.model";

export interface FormModel {
    formGroup: FormGroup;
    fields: FormFieldModel[];
}