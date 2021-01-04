import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { DocumentComponent } from './documentation.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'documention', component: DocumentComponent, data: { title: marker('Documentation') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DocumentationRoutingModule {}
