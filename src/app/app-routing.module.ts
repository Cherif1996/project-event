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
<<<<<<< HEAD
=======

>>>>>>> e5db9bc4852891dd6c1722121c5c1413bb48448c



const routes: Routes = [
 { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
<<<<<<< HEAD
=======
  /*{path: 'galary' , component: GalaryComponent},*/
>>>>>>> e5db9bc4852891dd6c1722121c5c1413bb48448c
  {path: 'contact' , component: ContactComponent},
  {path: 'service' , component: ServicesComponent},
  {path: 'agence' , component: AgenceComponent},
  {path: 'evenement' , component: EvenementComponent},
  {path: 'detail/:id' , component: DetailComponent},
<<<<<<< HEAD
  { path: '', redirectTo: 'home', pathMatch: 'full' }
=======

  
  /*{ path: '', redirectTo: 'home', pathMatch: 'full' }*/
>>>>>>> e5db9bc4852891dd6c1722121c5c1413bb48448c


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
