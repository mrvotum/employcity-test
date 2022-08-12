import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpened = false;
  scrollBarWidth = 0;

  constructor() { }

  ngOnInit(): void {
    this.scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const body = document.querySelector('body');
    body?.classList.add(`scroll-width-${this.scrollBarWidth}`);
  }

  menuToggle() {
    this.menuOpened = !this.menuOpened;

    this.lockPage();
  }

  lockPage() {
    if (this.menuOpened) {
      document.querySelector('body')?.classList.add('lock-page');
    } else {
      document.querySelector('body')?.classList.remove('lock-page');
    }
  }
}
