import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentComponent } from './documentation.component';

@NgModule({
  imports: [CommonModule, TranslateModule, DocumentationRoutingModule],
  declarations: [DocumentComponent],
})
export class DocumentModule {}
