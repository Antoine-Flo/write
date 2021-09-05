import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Output() onSelection = new EventEmitter<any>();
  text: any;
  position: any;
  test: any;

  constructor(private window: Window) {}

  public selectionChange(): void {
    const selection = this.window.getSelection();
    const selectionRange = this.window.getSelection()?.getRangeAt(0);
    const textSelected = selection?.toString();
    const range = selectionRange?.cloneRange();

    if (textSelected) {
      this.position = range;
    }
  }


}
