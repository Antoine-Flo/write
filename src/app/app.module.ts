import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaveComponent } from './save/save.component';
import { SelectOptionsComponent } from './select-options/select-options.component';
import { StripHtmlPipe } from './core/strip-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SaveComponent,
    SelectOptionsComponent,
    StripHtmlPipe
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
