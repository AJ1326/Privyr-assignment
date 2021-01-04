import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './customDialog.component.html',
  styleUrls: ['./customDialog.component.scss'],
})
export class CustomDialogComponent implements OnInit {
  title: string;
  modalType: string;
  formType: string;
  formData: [];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
