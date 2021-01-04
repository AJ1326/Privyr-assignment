import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  message: string;

  constructor() {}

  ngOnInit() {}

  receiveMessage($event: any) {
    this.message = $event;
  }
}
