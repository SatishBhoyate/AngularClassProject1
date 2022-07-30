import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser'; // Module = set of build-in log.
import { Component, NgModule } from '@angular/core';

@Component({
  selector: '.app-root',
  template: '<h1> Hello Angular<h1>',
})
class FirstComponent {}

@NgModule({
  declarations: [FirstComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
class FirstModule {}

platformBrowserDynamic().bootstrapModule(FirstModule);

// document.getElementsByClassName('app-root')[0].innerHTML = 'Hello World...!';
