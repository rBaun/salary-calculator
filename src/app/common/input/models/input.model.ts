import { FormControl } from "@angular/forms";
import { InputType } from "./input.type";

export interface InputModel {
    type: InputType;
    formControl: FormControl;
    label?: string;
    placeholder?: string;
    disable?: boolean;
}