import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SignUpSectionComponent } from './sign-up-section/sign-up-section.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { CardSectionInverseComponent } from './card-section-inverse/card-section-inverse.component';
import { LogosGridComponent } from './logos-grid/logos-grid.component';
import { ClientStepsSectionComponent } from './client-steps-section/client-steps-section.component';
import { StartupsStepsSectionComponent } from './startups-steps-section/startups-steps-section.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    MainSliderComponent,
    SignUpSectionComponent,
    CardSectionComponent,
    CardSectionInverseComponent,
    LogosGridComponent,
    ClientStepsSectionComponent,
    StartupsStepsSectionComponent,
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
