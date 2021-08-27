import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SocialsComponent } from './header/socials/socials.component';
import { IntroComponent } from './intro/intro.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CtaComponent } from './cta/cta.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SocialsComponent,
    IntroComponent,
    AboutUsComponent,
    FeaturesComponent,
    OurServicesComponent,
    PortfolioComponent,
    CtaComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
