import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalaryComponent } from './galary/galary.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AgenceComponent } from './agence/agence.component';
import { EvenementComponent } from './evenement/evenement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalaryComponent,
    ServicesComponent,
    ContactComponent,
    AgenceComponent,
    EvenementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
