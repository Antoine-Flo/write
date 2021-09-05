import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaveComponent } from './save/save.component';
import { SelectOptionsComponent } from './select-options/select-options.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveComponent,
    SelectOptionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
