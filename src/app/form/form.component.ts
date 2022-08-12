import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  selectIsOpen = false;
  rangeValue = 75;

  constructor() { }

  ngOnInit(): void {}

  toggleSelect() {
	  this.selectIsOpen = !this.selectIsOpen;
  }

  setRam(e:any) {
    console.log(e);
  }

}
