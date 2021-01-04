import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeadList } from './lead-list-interface';
import { BehaviorSubject } from 'rxjs';
import leadlist from '../../../assets/sample-lead-list/lead-small.json';

@Injectable()
export class LeadService {
  private leadSource = new BehaviorSubject(leadlist.data);
  currentLeadSource = this.leadSource.asObservable();

  private leadOrginalSource = new BehaviorSubject(leadlist.data);
  currentLeadOriginalSource = this.leadOrginalSource.asObservable();

  constructor(private http: HttpClient) {}

  changeLeadSource(lead: LeadList[]) {
    this.leadSource.next(lead);
  }

  // To map the original values of the lead list. This can be used when manipulate the list in case of search/Delete.
  changeLeadOriginalSource(lead: LeadList[]) {
    this.leadOrginalSource.next(lead);
  }

  getLeadList() {
    return this.http
      .get<any>('../../../assets/sample-lead-list/lead-small.json')
      .toPromise()
      .then((res) => <LeadList[]>res.data)
      .then((data) => {
        return data;
      });
  }

  generateId() {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  getCurrentUTC() {
    return new Date().getTime().toString();
  }
}
