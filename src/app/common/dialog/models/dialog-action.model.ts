import { DialogActionType } from "./dialog-action.type";

export interface DialogAction {
	label: string;
	type?: DialogActionType;
}