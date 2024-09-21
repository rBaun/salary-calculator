import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DialogComponent } from './dialog.component';
import { DialogModel } from './models/dialog.model';

@Injectable({
	providedIn: 'root',
})
export class DialogService {
	private viewContainerRef!: ViewContainerRef;
	private dialogRef?: ComponentRef<DialogComponent>;
	private dialogResult$ = new Subject<boolean>();

	setViewContainerRef(viewContainerRef: ViewContainerRef): void {
		this.viewContainerRef = viewContainerRef;
	}

	openDialog = (dialogInput: DialogModel): Observable<boolean> => {
		this.setupDialogComponent(dialogInput);

		return this.dialogResult$.asObservable();
	}

	closeDialog = (result: boolean): void => {
		console.log('dialogService.closeDialog', result);
		// Broadcast the result
		this.dialogResult$.next(result);

		// Complete to avoid duplicated emissions
		this.dialogResult$.complete();
	}

	private setupDialogComponent = (dialogInput: DialogModel): void => {
		if (this.dialogRef) {
			this.dialogRef.destroy();
		}

		this.dialogRef = this.viewContainerRef.createComponent(DialogComponent);
		this.dialogRef.instance.data = dialogInput;
		this.dialogRef.instance.setDialogIcon();
		this.dialogRef.instance.isOpen$.next(true);
	}
}
