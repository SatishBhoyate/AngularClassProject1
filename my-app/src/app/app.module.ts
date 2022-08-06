import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstComponent } from './components/root/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerOneComponent } from './components/banner-one/banner-one.component';
import { BannerTwoComponent } from './components/banner-two/banner-two.component';
import { BannerThreeComponent } from './components/banner-three/banner-three.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    FirstComponent,
    HeaderComponent,
    FooterComponent,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ContactUsComponent,
    ProductsComponent,
  ], // list of Compo, . . .
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
export class FirstModule {}
