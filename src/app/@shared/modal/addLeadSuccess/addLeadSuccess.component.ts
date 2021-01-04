import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lead-success',
  templateUrl: './addLeadSuccess.component.html',
  styleUrls: ['./addLeadSuccess.component.scss'],
})
export class AddLeadSuccessComponent implements OnInit {
  isLoading = false;
  @Input() title_tag: string;
  @Input() formType: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    setTimeout(() => {
      this.activeModal.close(true);
    }, 2000);
  }
}
