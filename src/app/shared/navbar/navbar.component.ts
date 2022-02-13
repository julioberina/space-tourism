import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  open() {
    this.isOpened = true;
    (document.getElementById('m-nav') as HTMLDivElement)?.classList?.add('nav-open');
  }

  close() {
    this.isOpened = false;
    (document.getElementById('m-nav') as HTMLDivElement)?.classList?.remove('nav-open');
  }
}
