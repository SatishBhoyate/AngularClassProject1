import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstComponent } from './components/root/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [FirstComponent, HeaderComponent, FooterComponent], // list of Compo, . . .
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
export class FirstModule {}
