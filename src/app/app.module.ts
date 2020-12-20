import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { GalaryComponent } from './galary/galary.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AgenceComponent } from './agence/agence.component';
import { EvenementComponent } from './evenement/evenement.component';
import { DetailComponent } from './detail/detail.component';
import { GalerieComponent } from './galerie/galerie.component';
import { AboutComponent } from './about/about.component';
import { VenuComponent } from './venu/venu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    NavbarComponent,
    ServicesComponent,
    ContactComponent,
    AgenceComponent,
    EvenementComponent,
    DetailComponent,
    GalaryComponent,
    GalerieComponent,
    AboutComponent,
    VenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
