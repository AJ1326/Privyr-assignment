import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from './loader/loader.component';
import { SearchComponent } from './search/search.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ConfirmDialogComponent } from './modal/confirmDialog/confirmDialog.component';
import { CustomDialogComponent } from './modal/customDialog/customDialog.component';
import { AddLeadSuccessComponent } from './modal/addLeadSuccess/addLeadSuccess.component';
import { AddLeadComponent } from './modal/addLead/addLead.component';
import { LeadsComponent } from './leads/leads.component';
import { SpinnerService } from './spinner/spinner.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// PrimeNg
import { LeadService } from './leads/leadservice';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    AutoCompleteModule,
    ToastModule,
    InputTextModule,
    TranslateModule,
  ],
  declarations: [
    LoaderComponent,
    ConfirmDialogComponent,
    AddLeadSuccessComponent,
    CustomDialogComponent,
    SpinnerComponent,
    AddLeadComponent,
    SearchComponent,
    LeadsComponent,
  ],
  exports: [LoaderComponent, SearchComponent, CustomDialogComponent, ConfirmDialogComponent, AddLeadSuccessComponent, LeadsComponent],
  providers: [LeadService, SpinnerService, MessageService, AddLeadSuccessComponent],
})
export class SharedModule {}
