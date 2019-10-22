import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
import { StartupsComponent } from './startups/startups.component';
import { StartupsSliderComponent } from './startups-slider/startups-slider.component';
import { StartupsSearchComponent } from './startups-search/startups-search.component';
import { StartupsCardComponent } from './startups-card/startups-card.component';
import { LoginModalComponentComponent } from './login-modal-component/login-modal-component.component';
import { SignInModalComponentComponent } from './sign-in-modal-component/sign-in-modal-component.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'startups', component: StartupsComponent }
]
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
    FooterComponent,
    StartupsComponent,
    StartupsSliderComponent,
    StartupsSearchComponent,
    StartupsCardComponent,
    LoginModalComponentComponent,
    SignInModalComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
