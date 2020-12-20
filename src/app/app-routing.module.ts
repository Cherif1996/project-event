import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ContactComponent } from './contact/contact.component';
import { GalaryComponent } from './galary/galary.component';
import { ServicesComponent } from './services/services.component';
import{ AgenceComponent} from './agence/agence.component';
import {EvenementComponent} from './evenement/evenement.component';
import{DetailComponent}from './detail/detail.component';
import{GalerieComponent}from './galerie/galerie.component';
import { AboutComponent } from './about/about.component';
import { VenuComponent } from './venu/venu.component';






const routes: Routes = [
 { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  /*{path: 'galary' , component: GalaryComponent},*/
  {path: 'contact' , component: ContactComponent},
  {path: 'service' , component: ServicesComponent},
  {path: 'agence' , component: AgenceComponent},
  {path: 'evenement' , component: EvenementComponent},
  {path: 'galerie' , component: GalerieComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'venu' , component: VenuComponent},
  {path: 'detail/:id' , component: DetailComponent},
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }

  
  /*{ path: '', redirectTo: 'home', pathMatch: 'full' }*/


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
