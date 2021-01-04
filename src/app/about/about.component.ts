import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;
  constructor() {}
  ngOnInit() {}

  openProfile(): void {
    let url = 'https://www.abhishekjaimini.xyz/';
    window.open(url, '_blank');
  }
}
