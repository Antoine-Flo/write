import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  panel = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    console.log('save');
    this.panel = true;
  }
}
