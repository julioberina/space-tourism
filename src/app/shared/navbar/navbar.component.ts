import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() selected: string = '';
  public isOpened = false;
  public navItems = [
    { klass: 'nav-item', href: '/' },
    { klass: 'nav-item', href: '/destination' },
    { klass: 'nav-item', href: '/crew' },
    { klass: 'nav-item', href: '/technology' }
  ]

  constructor() { }

  ngOnInit(): void {
    this.navItems.filter(item => item.href === `/${this.selected}`)[0].klass += ' selected';
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
