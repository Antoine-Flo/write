import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss'],
})
export class SelectOptionsComponent implements OnInit {
  currentStyles: Record<string, string> = {};
  displayOptions = false;
  left!: number;
  top!: number;

  @Input()
  get position(): any {
    return this._name;
  }
  set position(range: any) {
    if (range) {
      this.displayOptions = true;
      const {x, y} = range.getBoundingClientRect()
      this.setCurrentStyles({x, y})
      console.log(x);
    }
  }
  private _name: any;


  constructor() {}

  ngOnInit(): void {}


/* . . . */
  setCurrentStyles(position: {x: number, y: number}) {

    this.currentStyles = {
      'visibility':  this.displayOptions ? 'visible' : 'hidden',
      'top': String(position.y - 30) + "px",
      'left': String(position.x) + "px"
    };
  }
}
