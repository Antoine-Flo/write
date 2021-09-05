import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss'],
})
export class SelectOptionsComponent implements OnInit {
  currentStyles: Record<string, string> = {};


  @Input()
  set position(range: any) {
    if (range) {
      const {x, y} = range.getBoundingClientRect()
      this.displayModal({x, y})
    }
  }

  constructor() {}

  ngOnInit(): void {}


/* . . . */
  displayModal(position: {x: number, y: number}) {

    this.currentStyles = {
      'visibility': 'visible',
      'top': String(position.y - 30) + "px",
      'left': String(position.x) + "px"
    };
  }
}
