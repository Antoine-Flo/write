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
    if (textSelected) {
      this.position = selectionRange;
    }
  }

  onCopy(data: any) {
 
    var text = 'Example text to appear on clipboard';
    navigator.clipboard.writeText(data).then(
      () => {
        console.log('Async: Copying to clipboard was successful!');
      },
      (err) => {
        console.error('Async: Could not copy text: ', err);
      }
    );
  }
}
