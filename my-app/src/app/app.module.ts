import { Component, NgModule } from '@angular/core';
import { FirstComponent } from './components/root/app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FirstComponent], // list of Compo, . . .
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
export class FirstModule {}
