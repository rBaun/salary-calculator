import { ButtonType } from "./button.type";

export interface ButtonModel {
    label: string;
    type: ButtonType;
    display?: 'both' | 'icon' | 'text';
    disable?: boolean;
    backRoute?: string;
}