import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LeadService } from './leadservice';
import { LeadList } from './lead-list-interface';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs/operators';
import { ModalService } from '@app/@core/modal/modal.service';
import { SpinnerService } from '../spinner/spinner.service';
import { CredentialsService } from '@app/auth/credentials.service';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit, OnDestroy {
  @Input() isLoading = false;
  leads: LeadList[];
  allLeadList: LeadList[];
  leadData: any;
  leadOriginalData: any;
  accArray: any[] = [];
  actionType: string;
  userData: any;

  constructor(
    private leadService: LeadService,
    private modalService: ModalService,
    private messageService: MessageService,
    private spinnerService: SpinnerService,
    private credentialsService: CredentialsService
  ) {}

  ngOnDestroy(): void {
    this.leadData.unsubscribe();
    this.leadOriginalData.unsubscribe();
  }

  getIndex(arr: any, lead: LeadList) {
    let index = arr.map((item: any) => item.id).indexOf(lead['id']);
    return index;
  }

  ngOnInit() {
    this.userData = this.credentialsService.credentials;
    this.leadData = this.leadService.currentLeadSource.subscribe((lead) => {
      this.leads = lead.length > 0 ? [...lead] : null;
    });
    this.leadOriginalData = this.leadService.currentLeadOriginalSource.subscribe((lead) => {
      this.allLeadList = [...lead];
    });
  }

  toggleDetails(index: any): void {
    if (this.accArray.includes(index)) {
      const pos = this.accArray.indexOf(index);
      if (index > -1) {
        this.accArray.splice(pos, 1);
      }
    } else {
      this.accArray.push(index);
    }
  }

  changeStatusOfLead(lead: LeadList, leadStatusActionType: string, confirmModaltitle: string): void {
    this.actionType = leadStatusActionType;
    this.modalService
      .confirm('Are you sure that you want to' + ' ' + leadStatusActionType + ' ' + lead['name'], confirmModaltitle)
      .pipe(take(1))
      .subscribe((confirmed: any) => {
        if (confirmed) {
          this.spinnerService.show();
          // It's just added to show th effect of spinner and how it will reacct if an api call is made.
          setTimeout(() => {
            this.leadStatusChanged(lead, leadStatusActionType);
          }, 2000);
        }
      });
  }

  leadStatusChanged(lead: LeadList, status: string): void {
    //in a real application, make a request to a remote url with the query and return updated lead list
    let changedIndex = this.getIndex(this.allLeadList, lead);
    this.allLeadList[changedIndex]['status'] = status + 'ed';
    this.allLeadList[changedIndex]['action_taken_by'] = {
      id: this.userData.id,
      agent_type: this.userData.agent_type,
      name: this.userData.name,
    };
    this.allLeadList[changedIndex]['action_taken_at_time'] = this.leadService.getCurrentUTC();
    this.leadService.changeLeadSource(this.allLeadList);
    this.leadService.changeLeadOriginalSource(this.allLeadList);
    this.spinnerService.hide();
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: lead['name'] + ' is ' + status + 'ed' + ' successfully',
    });
  }
}
