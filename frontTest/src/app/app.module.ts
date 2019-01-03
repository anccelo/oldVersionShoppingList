import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestNewComponentComponent } from './test-new-component/test-new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestNewComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
