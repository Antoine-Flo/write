import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss'],
})
export class SelectOptionsComponent implements OnInit {
  currentStyles: Record<string, string> = {};
  modalDisplayed = false;
  _range: any;

  @Input()
  get position() {
    return this._range;
  }
  set position(range: any) {
    if (range) {
      this._range = range;
      const {x, y} = range.getBoundingClientRect()
      this.displayModal({x, y})
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {


    document.addEventListener('selectionchange', () => {
      const selected = document.getSelection()?.toString()
      if(!this.eRef.nativeElement.contains(event.target) && !selected) { this.closeModal() }
    });
  }
  
  constructor(private eRef: ElementRef) {}
  
  ngOnInit(): void {}
  
  
  displayModal(position: {x: number, y: number}) {
    this.modalDisplayed = true;

    this.currentStyles = {
      'visibility': 'visible',
      'top': String(position.y - 40) + "px",
      'left': String(position.x) + "px"
    };
  }
  
  private closeModal() {
    this.modalDisplayed = false;
    this.currentStyles = {
      'visibility': 'hidden',
    };
  }

  regular() {
    const span = this.createSpan();
    span.style.fontStyle = "normal"
    span.style.fontWeight = "normal"
    span.style.textDecoration = "none"
    this.replaceContent(span)
  }

  italic() {
    const span = this.createSpan();
    span.style.fontStyle = "italic";
    this.replaceContent(span);
  }

  bold() {
    const span = this.createSpan();
    span.style.fontWeight = "bold"
    this.replaceContent(span)
  }

  underline() {
    const span = this.createSpan();
    span.style.textDecoration = "underline"
    this.replaceContent(span)
  }

  private createSpan() {
    const selectedText = document.getSelection()?.toString();
    const newSpan = document.createElement('span');
    newSpan.innerHTML = <string>selectedText;
    return newSpan;
  }

  private replaceContent(newSpan: any) {
    this._range.deleteContents();
    this._range.insertNode(newSpan);
    this.closeModal();
  }

}
