import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  panel = false;
  fileUrl: any;

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.panel = true;
    } else {
      this.panel = false;
    }
  }

  constructor(private eRef: ElementRef, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onSave() {
    this.panel = true;
  }

  onTxt() {
      const content = document.querySelector('#write')?.innerHTML;
      const blob = new Blob([<string>content], { type: 'application/octet-stream' });
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob))
  }

  onPdf() {
      const content = document.querySelector('#write')?.innerHTML;
      const blob = new Blob([<string>content], { type: 'application/pdf' });
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob))
  }
}
