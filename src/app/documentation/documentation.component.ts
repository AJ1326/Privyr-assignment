import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-document',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentComponent implements OnInit {
  version: string | null = environment.version;
  constructor() {}
  ngOnInit() {}

  openDocumentation(): void {
    let url = 'https://docs.google.com/document/d/1R6nwqExkd0G367OAtkmTcZ5Dj8qTafNP0vBo526oCEM/edit?usp=sharing';
    window.open(url, '_blank');
  }
}
