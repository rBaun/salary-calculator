import { BehaviorSubject } from 'rxjs';
import { DialogActionType } from './dialog-action.type';

export interface DialogAction {
	label: string;
	type?: DialogActionType;
	disabled$?: BehaviorSubject<boolean>;
}
