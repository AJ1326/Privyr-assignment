import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProviderDataValidators as Validators } from '@app/modules/data-valiidator';
import { LeadService } from '@app/@shared/leads/leadservice';
import { LeadList } from '@app/@shared/leads/lead-list-interface';
import { SpinnerService } from '@app/@shared/spinner/spinner.service';

@Component({
  selector: 'app-add-lead',
  templateUrl: './addLead.component.html',
  styleUrls: ['./addLead.component.scss'],
})
export class AddLeadComponent implements OnInit, OnDestroy {
  leadForm: FormGroup;
  submitted = false;
  isLoading = false;
  leadOriginalData: any;
  allLeadList: LeadList[];

  @Input() title_tag: string;
  @Input() formType: string;
  @Input() form_data: [];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private leadService: LeadService,
    private spinnerService: SpinnerService
  ) {}

  ngOnDestroy(): void {
    this.leadOriginalData.unsubscribe();
  }

  ngOnInit() {
    this.leadOriginalData = this.leadService.currentLeadOriginalSource.subscribe((leads) => {
      this.allLeadList = leads;
    });
    this.getAddLeadForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.leadForm.controls;
  }

  save() {
    this.submitted = true;
    if (this.leadForm.valid) {
      const leadData = this.leadForm.value;
      leadData['action_taken_by'] = null;
      leadData['id'] = this.leadService.generateId();
      leadData['created_at'] = this.leadService.getCurrentUTC();
      leadData['status'] = 'pending';
      this.isLoading = true;
      this.spinnerService.show();
      // It's just added to show th effect of spinner and how it will reacct if an api call is made.
      setTimeout(() => {
        this.submitAddLeadForm(leadData);
      }, 2000);
    } else {
      return;
    }
  }

  submitAddLeadForm(leadData: LeadList): void {
    this.allLeadList.unshift(leadData);
    this.leadService.changeLeadSource(this.allLeadList);
    this.leadService.changeLeadOriginalSource(this.allLeadList);
    this.isLoading = false;
    this.submitted = false;
    this.activeModal.close(true);
    this.spinnerService.hide();
  }

  getAddLeadForm() {
    this.leadForm = this.formBuilder.group({
      name: ['', [Validators.required()]],
      email: [null, [Validators.email()]],
      comment: [null, []],
      phone_number: [null, [Validators.numberRequired()]],
    });
  }
}
