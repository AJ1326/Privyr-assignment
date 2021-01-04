import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfirmDialogComponent } from '@app/@shared/modal/confirmDialog/confirmDialog.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private ngbModal: NgbModal) {}

  // Generic confirm modal
  // tslint:disable-next-line:typedef
  confirm(message = 'Really?', title: any = null): Observable<boolean> {
    const modal = this.ngbModal.open(ConfirmDialogComponent);

    modal.componentInstance.message = message;
    modal.componentInstance.title = title;

    return from(modal.result);
  }

  // Custom form for the representation of form.
  custom(content: any, config?: { [index: string]: any }, options?: NgbModalOptions): Observable<any> {
    const modal = this.ngbModal.open(content, { backdrop: 'static', ...options });
    Object.assign(modal.componentInstance, config);
    return from(modal.result).pipe(
      catchError((error) => {
        console.warn(error);
        return of(undefined);
      })
    );
  }
}
