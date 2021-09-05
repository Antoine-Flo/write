import {
  Component, EventEmitter, Output,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Output() onSelection = new EventEmitter<any>();

  title = 'write';

  position: any;
  // select: any;
  // markerEvent: any;
  // colorMarker = 'blue';
  // selectionChangeTimer: any;

  constructor(
    private window: Window,
  ) {}



  public selectionChange(): void {

    
    const selection = this.window.getSelection();
    const selectionRange = this.window.getSelection()?.getRangeAt(0);
    const textSelected = selection?.toString();
    const range = selectionRange?.cloneRange();

    if(textSelected) {
      // console.log(selection);
      // console.log(selectionRange);
      // console.log(range?.getBoundingClientRect());
      this.position = range;

    }
    
  }
}
