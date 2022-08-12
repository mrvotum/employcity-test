import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpened = false;

  constructor() { }

  ngOnInit(): void {
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
