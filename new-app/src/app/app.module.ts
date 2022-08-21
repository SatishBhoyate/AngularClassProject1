import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/nav/nav.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { SharedService } from './services/shared.service';
import { OfferPipe } from './pipes/offer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ProductsComponent,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ContactUsComponent,
    OfferPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
