import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { GalaryComponent } from './galary/galary.component';
import { ServicesComponent } from './services/services.component';
import{ AgenceComponent} from './agence/agence.component';
import {EvenementComponent} from './evenement/evenement.component';




const routes: Routes = [
  {path: 'galary' , component: GalaryComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'service' , component: ServicesComponent},
  {path: 'agence' , component: AgenceComponent},
  {path: 'evenement' , component: EvenementComponent},
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
