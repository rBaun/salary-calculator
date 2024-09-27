import { DialogAction } from './dialog-action.model';
import { DialogType } from './dialog.type';

export interface DialogModel {
	title: string;
	type: DialogType;
	message?: string;
	content?: any;
	showWarning?: boolean;
	actions?: DialogAction[];
	customIcon?: string;
}
