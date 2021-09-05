import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  panel = false;

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.panel = true;
    } else {
      this.panel = false;
    }
  }

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  onSave() {
    this.panel = true;
  }
}
