import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shell-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnChanges {
  currentURL: any;
  closeSideNav = false;
  message: string;

  @Input() sidenavChildMessage: string = 'close';

  constructor(private readonly router: Router) {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationStart)).subscribe((event: any) => {
      const parts = event.url.split('/');
      this.currentURL = parts[parts.length - 1]; // Or parts.pop();
    });
    const url = window.location.href.replace(/\/$/, ''); /* remove optional end / */
    this.currentURL = url.substr(url.lastIndexOf('/') + 1);
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.sidenavChildMessage === 'close') {
      this.closeSideNav = false;
    } else {
      this.closeSideNav = true;
    }
  }
}
