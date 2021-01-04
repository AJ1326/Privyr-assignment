import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LeadService } from '../leads/leadservice';
import { LeadList } from '../leads/lead-list-interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() isLoading = false;
  @Input() message: string;
  selectedLead: string = null;
  leadList: any[];
  cloneLeadList: any[];
  filteredLeadList: any[];
  leadData: any;
  leadOriginalData: any;

  constructor(private LeadService: LeadService) {}

  ngOnDestroy(): void {
    this.leadData.unsubscribe();
    this.leadOriginalData.unsubscribe();
  }

  ngOnInit() {
    this.leadData = this.LeadService.currentLeadSource.subscribe((leads) => {
      this.leadList = leads;
    });
    this.leadOriginalData = this.LeadService.currentLeadOriginalSource.subscribe((leads) => {
      this.cloneLeadList = [...leads];
      this.selectedLead = null;
    });
  }

  filterLead(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let query = event.query;
    this.filteredLeadList = this.cloneLeadList.filter((o) =>
      o['name'].toLowerCase().includes(query.toLowerCase())
    );
    this.LeadService.changeLeadSource(this.filteredLeadList);
  }

  onSelectLeadFunc(lead: LeadList): void {
    this.LeadService.changeLeadSource([lead]);
  }

  onUnSelectLeadFunc(): void {
    this.LeadService.changeLeadSource(this.cloneLeadList);
  }
}
